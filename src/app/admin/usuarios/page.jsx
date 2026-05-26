'use client'
import Sidebar from '@/components/admin/Sidebar'
import Navbar from '@/components/admin/Navbar'
import UsuariosTable from '@/components/admin/UsuariosTable'
import AgregarUsuarioModal from '@/components/admin/AgregarUsuarioModal'

import { useState } from 'react'

export default function UsuariosPage() {
    const [modalAbierto, setModalAbierto] = useState(false)

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

                        <h1 className="text-4xl font-bold text-gray-800 mb-8">
                            Usuarios Registrados
                        </h1>

                        <button
                            onClick={abrirModal}
                            className="w-12 h-12 rounded-full border-2 border-pink-500 text-pink-500 text-3xl hover:bg-pink-500 hover:text-white transition">
                            +
                        </button>
                    </div>

                    <UsuariosTable />
                    <AgregarUsuarioModal
                        modalAbierto={modalAbierto}
                        cerrarModal={cerrarModal}
                    />

                </div>

            </div>

        </div>

    )

}