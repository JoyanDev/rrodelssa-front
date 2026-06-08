'use client'

import Sidebar from '@/components/admin/Sidebar'
import Navbar from '@/components/admin/Navbar'
import UsuariosTable from '@/components/admin/UsuariosTable'
import AgregarUsuarioModal from '@/components/admin/AgregarUsuarioModal'
import ExportarUsuarios from '@/components/admin/ExportarUsuarios'

import { useEffect, useState } from 'react'

export default function UsuariosPage() {

    const [modalAbierto, setModalAbierto] = useState(false)
    const [usuarios, setUsuarios] = useState([])

    useEffect(() => {

        const obtenerUsuarios = async () => {

            try {

                const res = await fetch(
                    `${process.env.NEXT_PUBLIC_API_URL}/usuarios`
                )

                const data = await res.json()

                if (data.ok) {

                    const usuariosFiltrados = data.usuarios.filter(
                        user => user.rol === 'usuario'
                    )

                    setUsuarios(usuariosFiltrados)

                }

            } catch (error) {

                console.log(error)

            }

        }

        obtenerUsuarios()

    }, [])

    const abrirModal = () => {
        setModalAbierto(true)
    }

    const cerrarModal = () => {
        setModalAbierto(false)
    }

    return (

        <div className="bg-gray-100 min-h-screen">

            <Sidebar />

            <div className="ml-64">

                <Navbar />

                <div className="p-8">

                    <div className='flex justify-between items-center mb-8'>

                        <h1 className="text-4xl font-bold text-gray-800">
                            Usuarios Registrados
                        </h1>

                        <div className="flex gap-3">

                            <ExportarUsuarios
                                usuarios={usuarios}
                            />

                            <button
                                onClick={abrirModal}
                                title='Agregar usuarios'
                                className="w-12 h-12 rounded-full border-2 border-pink-500 text-pink-500 text-3xl hover:bg-pink-500 hover:text-white transition cursor-pointer"
                            >
                                +
                            </button>

                        </div>

                    </div>

                    <UsuariosTable
                        usuarios={usuarios}
                        setUsuarios={setUsuarios}
                    />

                    <AgregarUsuarioModal
                        modalAbierto={modalAbierto}
                        cerrarModal={cerrarModal}
                    />

                </div>

            </div>

        </div>

    )

}