// src/components/usuario/Categorias.jsx

import CategoriaCard from './CategoriaCard'

export default function Categorias() {

    const categorias = [

        {
            nombre: 'Cemento',
            descripcion: 'Material resistente para estructuras',
            imagen: '/CementoSol.jpg',
            id: 'cemento'
        },

        {
            nombre: 'Ladrillos',
            descripcion: 'Ideal para muros y paredes',
            imagen: '/Ladrillo-king kong.jpg',
            id: 'ladrillos'
        },

        {
            nombre: 'Fierros',
            descripcion: 'Para reforzar tus construcciones',
            imagen: '/FierroAcero.jpg',
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