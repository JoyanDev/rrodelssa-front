'use client'

export default function EditarProductosoModal({
    modalAbierto,
    cerrarModal,
    productoSeleccionado,
    handleChange,
    guardarCambios
}) {

    if (!modalAbierto) return null

    return (

        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">

            <div className="bg-white p-8 rounded-2xl w-[400px]">

                <h2 className="text-2xl font-bold text-black mb-6">
                    Editar Producto
                </h2>

                <input
                    type="text"
                    name="nombre"
                    value={productoSeleccionado.nombre}
                    onChange={handleChange}
                    placeholder="Nombre"
                    className="w-full border p-3 rounded mb-4 text-black"
                />

                <input
                    type="text"
                    name="descripcion"
                    value={productoSeleccionado.descripcion}
                    onChange={handleChange}
                    placeholder="Descripcion"
                    className="w-full border p-3 rounded mb-6 text-black"
                />
                <input
                    type="text"
                    name="precio"
                    value={productoSeleccionado.precio}
                    onChange={handleChange}
                    placeholder="Precio"
                    className="w-full border p-3 rounded mb-6 text-black"
                />
                <input
                    type="text"
                    name="stock"
                    value={productoSeleccionado.stock}
                    onChange={handleChange}
                    placeholder="Stock"
                    className="w-full border p-3 rounded mb-6 text-black"
                />

                <div className="flex justify-end gap-3">

                    <button
                        onClick={cerrarModal}
                        className="bg-gray-600 hover:bg-gray-700 px-4 py-2 rounded cursor-pointer"
                    >
                        Cancelar
                    </button>

                    <button
                        onClick={guardarCambios}
                        className="bg-green-500 hover:bg-green-600  text-white px-4 py-2 rounded cursor-pointer"
                    >
                        Guardar
                    </button>

                </div>

            </div>

        </div>

    )

}