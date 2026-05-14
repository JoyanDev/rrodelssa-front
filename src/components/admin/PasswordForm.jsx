export default function PasswordForm() {

    return (

        <div className="bg-white rounded-2xl shadow-md p-8">

            <h2 className="text-2xl font-bold text-pink-500 mb-6">
                Cambiar contraseña
            </h2>

            <form className="space-y-4">

                <div>
                    <label className="block mb-1 font-semibold text-gray-700">
                        Contraseña actual
                    </label>

                    <input
                        type="password"
                        className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-pink-400"
                    />
                </div>

                <div>
                    <label className="block mb-1 font-semibold text-gray-700">
                        Nueva contraseña
                    </label>

                    <input
                        type="password"
                        className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-pink-400"
                    />
                </div>

                <div>
                    <label className="block mb-1 font-semibold text-gray-700">
                        Confirmar contraseña
                    </label>

                    <input
                        type="password"
                        className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-pink-400"
                    />
                </div>

                <button className="w-full bg-pink-500 hover:bg-pink-600 text-white py-3 rounded-lg font-semibold">
                    Actualizar
                </button>

            </form>

        </div>

    )

}