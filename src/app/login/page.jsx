'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import {
    FaGoogle,
    FaFacebookF,
    FaApple,
    FaEnvelope,
    FaLock,
    FaUser
} from 'react-icons/fa'
import Swal from 'sweetalert2'

export default function LoginPage() {

    const router = useRouter()

    const [modoRegistro, setModoRegistro] = useState(false)

    const [usuario, setUsuario] = useState('')
    const [correo, setCorreo] = useState('')
    const [contrasena, setContrasena] = useState('')
    const [mensaje, setMensaje] = useState('')

    const handleLogin = async (e) => {

        e.preventDefault()

        try {

            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                credentials: 'include',
                body: JSON.stringify({
                    correo,
                    contrasena
                })
            })

            const data = await res.json()

            if (data.ok) {

                if (data.usuario.rol === 'admin') {

                    Swal.fire({
                        title: 'Ingreso exitoso',
                        text: '¡Bienvenido al panel de administración!',
                        icon: 'success',
                        confirmButtonColor: '#22c55e'
                    })

                    router.push('/admin')

                } else {

                    Swal.fire({
                        title: 'Ingreso exitoso',
                        text: '¡Bienvenido Usuario!',
                        icon: 'success',
                        confirmButtonColor: '#22c55e'
                    })

                    router.push('/usuario')
                }

            } else {

                Swal.fire({
                    title: 'Error',
                    text: data.mensaje,
                    icon: 'error'
                })

            }

        } catch (error) {

            console.log(error)

        }

    }

    const handleRegister = async (e) => {

        e.preventDefault()

        try {

            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/registrar`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    usuario,
                    correo,
                    contrasena
                })
            })

            const data = await res.json()

            if (data.ok) {

                Swal.fire({
                    title: 'Registro exitoso',
                    text: 'Se registraron los datos correctamente',
                    icon: 'success',
                    confirmButtonColor: '#22c55e'
                })

                setModoRegistro(false)

            } else {

                Swal.fire({
                    title: 'Error',
                    text: data.mensaje,
                    icon: 'error'
                })

            }

        } catch (error) {

            setMensaje('❌ Error del servidor')

        }

    }

    return (

        <div
            className="min-h-screen flex items-center justify-center bg-cover bg-center p-4"
            style={{
                backgroundImage: "url('/img/fondo-const.jpg')"
            }}
        >

            <div
                className="
                    w-full
                    max-w-5xl
                    bg-white
                    rounded-3xl
                    overflow-hidden
                    shadow-2xl
                    flex
                    flex-col
                    md:flex-row
                "
            >

                {/* PANEL IZQUIERDO */}

                <div
                    className="
                        w-full
                        md:w-[40%]
                        bg-cyan-100
                        flex
                        flex-col
                        justify-center
                        items-center
                        text-center
                        px-6
                        md:px-8
                        py-10
                    "
                >

                    {modoRegistro ? (
                        <>
                            <h1 className="text-3xl md:text-5xl font-bold mb-4 text-black">
                                Bienvenidos
                            </h1>

                            <p className="text-gray-900 mb-6 text-sm md:text-base">
                                Únete a nuestra comunidad,
                                por favor inicia sesión con tus datos
                            </p>

                            <button
                                onClick={() => setModoRegistro(false)}
                                className="border border-purple-300 px-6 md:px-8 py-2 rounded-full text-gray-600 hover:bg-white transition cursor-pointer"
                            >
                                Iniciar sesión
                            </button>
                        </>
                    ) : (
                        <>
                            <h1 className="text-3xl md:text-5xl font-bold mb-4 text-black">
                                ¡Bienvenido nuevamente!
                            </h1>

                            <p className="text-gray-600 mb-6 text-sm md:text-base">
                                Si aún no tienes una cuenta,
                                puedes registrarte aquí.
                            </p>

                            <button
                                onClick={() => setModoRegistro(true)}
                                className="border border-purple-300 px-6 md:px-8 py-2 rounded-full text-gray-600 hover:bg-white transition cursor-pointer"
                            >
                                Registrar
                            </button>
                        </>
                    )}

                </div>

                {/* PANEL DERECHO */}

                <div
                    className="
                        w-full
                        md:w-[60%]
                        flex
                        flex-col
                        justify-center
                        items-center
                        px-6
                        md:px-12
                        py-10
                    "
                >

                    <h1 className="text-3xl md:text-5xl font-bold mb-6 text-black text-center">

                        {modoRegistro
                            ? 'Crear cuenta'
                            : 'Iniciar Sesión'}

                    </h1>

                    {/* ICONOS */}

                    <div className="flex gap-3 md:gap-4 mb-5">

                        <div className="w-10 h-10 md:w-12 md:h-12 border border-red-300 rounded-full flex items-center justify-center">
                            <FaGoogle />
                        </div>

                        <div className="w-10 h-10 md:w-12 md:h-12 border border-red-300 rounded-full flex items-center justify-center">
                            <FaApple />
                        </div>

                        <div className="w-10 h-10 md:w-12 md:h-12 border border-red-300 rounded-full flex items-center justify-center">
                            <FaFacebookF />
                        </div>

                    </div>

                    <p className="text-gray-500 mb-6 text-center text-sm md:text-base">

                        {modoRegistro
                            ? 'O puedes usar tu gmail para registrarte'
                            : 'Iniciar sesión con una cuenta'}

                    </p>

                    <form
                        onSubmit={modoRegistro ? handleRegister : handleLogin}
                        className="w-full max-w-md flex flex-col items-center"
                    >

                        {modoRegistro && (

                            <div className="w-full bg-gray-100 rounded-xl flex items-center px-4 py-3 mb-4">

                                <FaUser className="text-gray-400 mr-3" />

                                <input
                                    type="text"
                                    placeholder="Usuario"
                                    value={usuario}
                                    onChange={(e) => setUsuario(e.target.value)}
                                    className="bg-transparent outline-none w-full text-black"
                                />

                            </div>

                        )}

                        <div className="w-full bg-gray-100 rounded-xl flex items-center px-4 py-3 mb-4">

                            <FaEnvelope className="text-gray-400 mr-3" />

                            <input
                                type="email"
                                placeholder="Correo electrónico"
                                value={correo}
                                onChange={(e) => setCorreo(e.target.value)}
                                className="bg-transparent outline-none w-full text-black"
                            />

                        </div>

                        <div className="w-full bg-gray-100 rounded-xl flex items-center px-4 py-3 mb-6">

                            <FaLock className="text-gray-400 mr-3" />

                            <input
                                type="password"
                                placeholder="Contraseña"
                                value={contrasena}
                                onChange={(e) => setContrasena(e.target.value)}
                                className="bg-transparent outline-none w-full text-black"
                            />

                        </div>

                        <button
                            type="submit"
                            className="bg-purple-300 hover:bg-purple-400 text-white px-10 py-3 rounded-full shadow-md transition cursor-pointer w-full md:w-auto"
                        >

                            {modoRegistro
                                ? 'Registrarse'
                                : 'Iniciar Sesión'}

                        </button>

                    </form>

                    <p className="mt-5 text-sm text-gray-600">
                        {mensaje}
                    </p>

                </div>

            </div>

        </div>

    )

}