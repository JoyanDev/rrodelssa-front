'use client'

export default function UsuariosTable() {

    const usuarios = [
        {
            id: 1,
            usuario: 'Dennis',
            correo: 'denicomon@gmail.com',
            rol: 'usuario'
        }
    ]

    return (

        <div className="bg-white rounded-xl shadow-md overflow-hidden">

            <div className="bg-rose-500 text-white grid grid-cols-4 p-4 font-bold">

                <span>USUARIO</span>
                <span>CORREO</span>
                <span>ROL</span>
                <span>ACCIONES</span>

            </div>

            {
                usuarios.map((user) => (

                    <div
                        key={user.id}
                        className="grid grid-cols-4 p-4 border-b items-center"
                    >

                        <span className="text-gray-700">
                            {user.usuario}
                        </span>

                        <span className="text-gray-700">
                            {user.correo}
                        </span>

                        <span className="text-gray-700">
                            {user.rol}
                        </span>

                        <div className="flex gap-2">

                            <button
                                className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-md"
                            >
                                Editar
                            </button>

                            <button
                                className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md"
                            >
                                Eliminar
                            </button>

                        </div>

                    </div>

                ))
            }

        </div>

    )

}