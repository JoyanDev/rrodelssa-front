'use client'

import { useEffect, useState } from 'react'

export default function ProductosTable({ categoria }) {

    const [productos, setProductos] = useState([])

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

    return (

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

                                <button className="bg-blue-500 text-white px-4 py-1 rounded">
                                    Editar
                                </button>

                                <button className="bg-red-500 text-white px-4 py-1 rounded">
                                    Eliminar
                                </button>

                            </td>

                        </tr>

                    ))}

                </tbody>

            </table>

        </div>

    )

}