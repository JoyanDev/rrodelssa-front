export default function ProductosTable() {

    const productos = [
        {
            nombre: 'Fierro Corrugado',
            descripcion: 'Fierro Corrugado 4.5',
            precio: 'S/ 25.00',
            stock: 30,
            imagen: '/fierro.png'
        }
    ]

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

                    {productos.map((producto, index) => (

                        <tr
                            key={index}
                            className="border-b"
                        >

                            <td className="p-4">
                                {producto.nombre}
                            </td>

                            <td className="p-4">
                                {producto.descripcion}
                            </td>

                            <td className="p-4">
                                {producto.precio}
                            </td>

                            <td className="p-4">
                                {producto.stock}
                            </td>

                            <td className="p-4">

                                <img
                                    src={producto.imagen}
                                    className="w-16 h-16 object-cover"
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