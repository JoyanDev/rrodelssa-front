// src/components/usuario/CategoriaCard.jsx

import Image from 'next/image'
import Link from 'next/link'
export default function CategoriaCard({ categoria }) {

    return (

        <div className="bg-white rounded-2xl shadow-md overflow-hidden">

            <Image
                src={categoria.imagen}
                alt={categoria.nombre}
                width={400}
                height={250}
                className="w-full h-56 object-cover"
            />

            <div className="p-5">

                <h3 className="text-3xl font-bold text-black mb-2">
                    {categoria.nombre}
                </h3>

                <p className="text-gray-600 mb-5">
                    {categoria.descripcion}
                </p>

                <Link
                    href={`/usuario?categoria=${categoria.id}`}
                    className="bg-teal-900 text-white px-5 py-2 rounded-xl inline-block"
                >
                    Ver más
                </Link>

            </div>

        </div>

    )

}