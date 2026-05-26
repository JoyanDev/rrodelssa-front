import { FaCamera } from 'react-icons/fa'

export default function PerfilCard() {

    return (

        <div className="bg-white rounded-2xl shadow-md p-10 text-center">

            <div className="relative w-fit mx-auto">

                <img
                    src="/img/perfil.webp"
                    alt="Foto perfil"
                    className="w-28 h-28 rounded-full object-cover border-4 border-pink-400"
                />

                <button className="absolute bottom-0 right-0 bg-pink-500 p-2 rounded-full text-white">
                    <FaCamera />
                </button>

            </div>

            <h2 className="text-3xl font-bold text-gray-700 mt-4">
                admin
            </h2>

            <p className="text-gray-500">
                admin@gmail.com
            </p>

            <span className="bg-pink-500 text-white px-4 py-1 rounded-full text-sm inline-block mt-2">
                Admin
            </span>

            <div className="mt-6">

                <button className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded-lg shadow">
                    Editar perfil
                </button>

            </div>

        </div>

    )

}