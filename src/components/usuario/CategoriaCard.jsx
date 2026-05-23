// src/components/usuario/CategoriaCard.jsx

import Image from 'next/image'

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

                <a
                    href={`#${categoria.id}`}
                    className="bg-teal-900 text-white px-5 py-2 rounded-xl inline-block"
                >
                    Ver más
                </a>

            </div>

        </div>

    )

}