import Image from 'next/image'

export default function ProductoCard({ producto }) {

    let srcImagen = '/img/no-image.png'

    if (
        producto.imagen &&
        typeof producto.imagen === 'string'
    ) {
        const img = producto.imagen.trim()

        // ✅ acepta cualquier imagen dentro de /img
        if (img.startsWith('/img/')) {
            srcImagen = `http://localhost:4000${img}`
        }
    }

    return (
        <div className="bg-white rounded-2xl shadow-md overflow-hidden">

            <Image
                src={srcImagen}
                alt={producto.nombre}
                width={400}
                height={250}
                className="w-full h-56 object-cover"
            />

            <div className="p-5">
                <h3 className="text-2xl font-bold text-black mb-2">
                    {producto.nombre}
                </h3>

                <p className="text-gray-600 mb-3">
                    {producto.descripcion}
                </p>

                <p className="text-xl font-bold text-teal-900 mb-5">
                    S/ {producto.precio}
                </p>

                <button className="bg-teal-900 text-white px-5 py-2 rounded-xl">
                    Agregar
                </button>
            </div>

        </div>
    )
}