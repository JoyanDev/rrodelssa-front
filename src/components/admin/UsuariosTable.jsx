'use client'

import { useEffect, useState } from 'react'
import EditarUsuarioModal from './EditarUsuarioModal'
import Swal from 'sweetalert2'

export default function UsuariosTable({
    usuarios,
    setUsuarios 
}) {

    const [modalAbierto, setModalAbierto] = useState(false)

    const [usuarioSeleccionado, setUsuarioSeleccionado] = useState({
        id: '',
        usuario: '',
        correo: ''
    })
    // Abrir modal
    const abrirModal = (usuario) => {

        setUsuarioSeleccionado(usuario)

        setModalAbierto(true)

    }

    // Cerrar modal
    const cerrarModal = () => {

        setModalAbierto(false)

    }

    // Cambiar inputs
    const handleChange = (e) => {

        setUsuarioSeleccionado({
            ...usuarioSeleccionado,
            [e.target.name]: e.target.value
        })

    }
    // Guardar cambios
    const guardarCambios = async () => {
        const result = await Swal.fire({
            title: '¿Guardar cambios?',
            text: 'Los datos del usuario serán actualizados',
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3b82f6',
            cancelButtonColor: '#ef4444',
            confirmButtonText: 'Sí, guardar',
            cancelButtonText: 'Cancelar'
        })

        if (!result.isConfirmed) return

        try {

            const res = await fetch(
                `${process.env.NEXT_PUBLIC_API_URL}/usuarios/${usuarioSeleccionado.id}`,
                {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        usuario: usuarioSeleccionado.usuario,
                        correo: usuarioSeleccionado.correo
                    })
                }
            )

            const data = await res.json()

            if (data.ok) {

                setUsuarios(
                    usuarios.map((user) =>
                        user.id === usuarioSeleccionado.id
                            ? usuarioSeleccionado
                            : user
                    )
                )

                cerrarModal()

            }

        } catch (error) {

            console.log(error)

        }

    }

    const eliminarUsuario = async (id) => {
            const result = await Swal.fire({
                title: '¿Desea eliminar el usuario?',
                text: 'Esta acción no se puede deshacer',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#ef4444',
                cancelButtonColor: '#6b7280',
                confirmButtonText: 'Si, eliminar',
                cancelButtonText: 'Cancelar'
            })
    
            if (!result.isConfirmed) return
    
            try {
                const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/usuarios/${id}`,
                    {
                        method: 'DELETE'
                    })
                const data = await res.json()
                if (data.ok) {
                    setUsuarios(
                        usuarios.filter((user) => user.id !== id)
                    )
                    Swal.fire({
                        title: 'Eliminado',
                        text: 'Usuario eliminado exitosamente',
                        icon: 'success',
                        confirmButtonColor: '#22c55e'
                    })
                }
            } catch (error) {
                console.log(error)
    
                Swal.fire({
                    title: 'Error',
                    text: 'No se pudo eliminar el usuario',
                    icon: 'error'
                })
            }
        }

    return (

        <>

            <div className="bg-white rounded-xl shadow-md overflow-hidden">

                <div className="bg-rose-500 text-white grid grid-cols-4 p-4 font-bold">

                    <span>USUARIO</span>
                    <span>CORREO</span>
                    <span>ROL</span>
                    <span>ACCIONES</span>

                </div>

                {
                    usuarios.map((user) => (

                        <div
                            key={user.id}
                            className="grid grid-cols-4 p-4 border-b items-center"
                        >

                            <span className="text-gray-700">
                                {user.usuario}
                            </span>

                            <span className="text-gray-700">
                                {user.correo}
                            </span>

                            <span className="text-gray-700">
                                {user.rol}
                            </span>

                            <div className="flex gap-2">

                                <button
                                    onClick={() => abrirModal(user)}
                                    title='Editar usuario'
                                    className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-md cursor-pointer"
                                >
                                    Editar
                                </button>

                                <button 
                                onClick={()=>eliminarUsuario(user.id)}
                                title='Eliminar usuario'
                                className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md cursor-pointer">
                                    Eliminar
                                </button>

                            </div>

                        </div>

                    ))
                }

            </div>

            <EditarUsuarioModal
                modalAbierto={modalAbierto}
                cerrarModal={cerrarModal}
                usuarioSeleccionado={usuarioSeleccionado}
                handleChange={handleChange}
                guardarCambios={guardarCambios}
            />

        </>

    )


}