// src/components/usuario/Categorias.jsx

import CategoriaCard from './CategoriaCard'

export default function Categorias() {

    const categorias = [

        {
            nombre: 'Cemento',
            descripcion: 'Material resistente para estructuras',
            imagen: '/img/productos/cemento-sol.webp',
            id: 'cemento'
        },

        {
            nombre: 'Ladrillos',
            descripcion: 'Ideal para muros y paredes',
            imagen: '/img/productos/ladrillo.webp',
            id: 'ladrillos'
        },

        {
            nombre: 'Fierros',
            descripcion: 'Para reforzar tus construcciones',
            imagen: '/img/productos/fierro.webp',
            id: 'fierros'
        }

    ]

    return (

        <section className="mb-16">

            <h2 className="text-4xl font-bold mb-8 text-black">
                Tipos de materiales
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                {categorias.map((categoria) => (

                    <CategoriaCard
                        key={categoria.id}
                        categoria={categoria}
                    />

                ))}

            </div>

        </section>

    )

}