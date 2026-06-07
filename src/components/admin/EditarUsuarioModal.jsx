'use client'

export default function EditarUsuarioModal({
    modalAbierto,
    cerrarModal,
    usuarioSeleccionado,
    handleChange,
    guardarCambios
}) {

    if (!modalAbierto) return null

    return (

        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">

            <div className="bg-white p-8 rounded-2xl w-[400px]">

                <h2 className="text-2xl font-bold text-black mb-6">
                    Editar Usuario
                </h2>

                <input
                    type="text"
                    name="usuario"
                    value={usuarioSeleccionado.usuario}
                    onChange={handleChange}
                    placeholder="Usuario"
                    className="w-full border p-3 rounded mb-4 text-black"
                />

                <input
                    type="email"
                    name="correo"
                    value={usuarioSeleccionado.correo}
                    onChange={handleChange}
                    placeholder="Correo"
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
                        className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded cursor-pointer"
                    >
                        Guardar
                    </button>

                </div>

            </div>

        </div>

    )

}