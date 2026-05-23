// src/components/usuario/ProductosCategoria.jsx

'use client'

import { useEffect, useState } from 'react'
import ProductoCard from './ProductoCard'

export default function ProductosCategoria({ categoria }) {

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

        <section
            id={categoria}
            className="mb-16"
        >

            <h2 className="text-4xl font-bold text-black mb-8 capitalize">
                {categoria}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                {productos.map((producto) => (

                    <ProductoCard
                        key={producto.id}
                        producto={producto}
                    />

                ))}

            </div>

        </section>

    )

}