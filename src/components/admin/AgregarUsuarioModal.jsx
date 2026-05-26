'use client'

import { useState } from 'react'
import Swal from 'sweetalert2'

export default function AgregarUsuarioModal({
    modalAbierto,
    cerrarModal
}) {

    const [usuario, setUsuario] = useState('')
    const [correo, setCorreo] = useState('')
    const [contrasena, setContrasena] = useState('')

    if (!modalAbierto) return null

    const agregarUsuario = async () => {

        try {

            const res = await fetch(
                `${process.env.NEXT_PUBLIC_API_URL}/registrar`,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        usuario,
                        correo,
                        contrasena
                    })
                }
            )

            const data = await res.json()

            if (data.ok) {

                Swal.fire({
                    title: 'Usuario agregado',
                    text: 'El usuario fue registrado correctamente',
                    icon: 'success',
                    confirmButtonColor: '#22c55e'
                })

                cerrarModal()

                window.location.reload()

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

    return (

        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">

            <div className="bg-white w-[400px] p-8 rounded-2xl">

                <h2 className="text-2xl font-bold text-black mb-6">
                    Agregar Usuario
                </h2>

                <input
                    type="text"
                    placeholder="Usuario"
                    value={usuario}
                    onChange={(e) => setUsuario(e.target.value)}
                    className="w-full border p-3 rounded mb-4 text-black"
                />

                <input
                    type="email"
                    placeholder="Correo"
                    value={correo}
                    onChange={(e) => setCorreo(e.target.value)}
                    className="w-full border p-3 rounded mb-4 text-black"
                />

                <input
                    type="password"
                    placeholder="Contraseña"
                    value={contrasena}
                    onChange={(e) => setContrasena(e.target.value)}
                    className="w-full border p-3 rounded mb-6 text-black"
                />

                <div className="flex justify-end gap-3">

                    <button
                        onClick={cerrarModal}
                        className="bg-gray-300 px-4 py-2 rounded cursor-pointer"
                    >
                        Cancelar
                    </button>

                    <button
                        onClick={agregarUsuario}
                        className="bg-pink-500 text-white px-4 py-2 rounded cursor-pointer"
                    >
                        Agregar
                    </button>

                </div>

            </div>

        </div>

    )

}