'use client'

import { useEffect, useState } from 'react'
import EditarProductosoModal from './EditarProductosModal'
import Swal from 'sweetalert2'

export default function ProductosTable({ categoria }) {

    const [productos, setProductos] = useState([])
    const [modalAbierto, setModalAbierto] = useState(false);

    const [productoSeleccionado, setProductoSeleccionado] = useState({
        id: '',
        nombre: '',
        descripcion: '',
        precio: '',
        stock: ''
    })

    useEffect(() => {

        const obtenerProductos = async () => {

            try {

                const res = await fetch(
                    `${process.env.NEXT_PUBLIC_API_URL}/productos/${categoria}`
                )

                const data = await res.json()

                if (data.ok) {

                    setProductos(data.productos)

                }

            } catch (error) {

                console.log(error)

            }

        }

        obtenerProductos()

    }, [categoria])

    //Abrir el modal 
    const abrirModal = (producto) => {
        setProductoSeleccionado(producto)
        setModalAbierto(true)
    }

    //Cerrar el modal 
    const cerrarModal = () => {
        setModalAbierto(false)
    }

    //Cambiar inputs 
    const handleChange = (e) => {
        setProductoSeleccionado({
            ...productoSeleccionado,
            [e.target.name]: e.target.value
        })
    }

    // Guardar cambios
    const guardarCambios = async () => {
        const result = await Swal.fire({
            title: '¿Guardar cambios?',
            text: 'Los datos del producto serán actualizados',
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3b82f6',
            cancelButtonColor: '#ef4444',
            confirmButtonText: 'Sí, actualizar',
            cancelButtonText: 'Cancelar'
        })

        if (!result.isConfirmed) return

        try {

            const res = await fetch(
                `${process.env.NEXT_PUBLIC_API_URL}/productos/${productoSeleccionado.id}`,
                {
                    method: 'PUT',
                    headers: {
                        'content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        nombre: productoSeleccionado.nombre,
                        descripcion: productoSeleccionado.descripcion,
                        precio: productoSeleccionado.precio,
                        stock: productoSeleccionado.stock
                    })
                }
            )
            const data = await res.json()
            if (data.ok) {
                setProductos(
                    productos.map((prod) =>
                        prod.id === productoSeleccionado.id
                            ? productoSeleccionado
                            : prod
                    )
                )
                cerrarModal()
            }

        } catch (error) {
            console.log(error)
        }
    }

    //Eliminar producto
    const eliminarProducto = async (id) => {
        const result = await Swal.fire({
            title: '¿Desea eliminar el producto?',
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
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/productos/${id}`,
                {
                    method: 'DELETE'
                })
            const data = await res.json()
            if (data.ok) {
                setProductos(
                    productos.filter((prod) => prod.id !== id)
                )
                Swal.fire({
                    title: 'Eliminado',
                    text: 'Producto eliminado exitosamente',
                    icon: 'success',
                    confirmButtonColor: '#22c55e'
                })
            }
        } catch (error) {
            console.log(error)

            Swal.fire({
                title: 'Error',
                text: 'No se pudo eliminar el producto',
                icon: 'error'
            })
        }
    }

    return (

        <>

            <div className="bg-white rounded-xl shadow overflow-hidden">

                <table className="w-full">

                    <thead className="bg-pink-500 text-white">

                        <tr>

                            <th className="p-4 text-left">NOMBRE</th>
                            <th className="p-4 text-left">DESCRIPCIÓN</th>
                            <th className="p-4 text-left">PRECIO</th>
                            <th className="p-4 text-left">STOCK</th>
                            <th className="p-4 text-left">IMAGEN</th>
                            <th className="p-4 text-left">ACCIONES</th>

                        </tr>

                    </thead>

                    <tbody>

                        {productos.map((producto) => (

                            <tr
                                key={producto.id}
                                className="border-b text-black"
                            >

                                <td className="p-4">
                                    {producto.nombre}
                                </td>

                                <td className="p-4">
                                    {producto.descripcion}
                                </td>

                                <td className="p-4">
                                    S/ {producto.precio}
                                </td>

                                <td className="p-4">
                                    {producto.stock}
                                </td>

                                <td className="p-4">

                                    <img
                                        src={`http://localhost:4000${producto.imagen}`}
                                        alt={producto.nombre}
                                        className="w-16 h-16 object-cover rounded"
                                    />

                                </td>

                                <td className="p-4 space-x-2">

                                    <button
                                        onClick={() => abrirModal(producto)}
                                        className="bg-blue-500 text-white px-4 py-1 rounded cursor-pointer"
                                    >
                                        Editar
                                    </button>

                                    <button 
                                    onClick={()=>eliminarProducto(producto.id)}
                                    className="bg-red-500 text-white px-4 py-1 rounded cursor-pointer">
                                        Eliminar
                                    </button>

                                </td>

                            </tr>

                        ))}

                    </tbody>

                </table>

            </div>

            <EditarProductosoModal
                modalAbierto={modalAbierto}
                cerrarModal={cerrarModal}
                productoSeleccionado={productoSeleccionado}
                handleChange={handleChange}
                guardarCambios={guardarCambios}
            />

        </>

    )

}