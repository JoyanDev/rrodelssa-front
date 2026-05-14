import Sidebar from '@/components/admin/Sidebar'
import Navbar from '@/components/admin/Navbar'
import UsuariosTable from '@/components/admin/UsuariosTable'

export default function UsuariosPage() {

    return (

        <div className="bg-gray-100 min-h-screen">

            <Sidebar />

            <div className="ml-64">

                <Navbar />

                <div className="p-8">

                    <h1 className="text-4xl font-bold text-gray-800 mb-8">
                        Usuarios Registrados
                    </h1>

                    <UsuariosTable />

                </div>

            </div>

        </div>

    )

}