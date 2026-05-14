import Sidebar from '@/components/admin/Sidebar'
import Navbar from '@/components/admin/Navbar'
import PerfilCard from '@/components/admin/PerfilCard'
import PasswordForm from '@/components/admin/PasswordForm'

export default function PerfilPage() {

    return (

        <div className="bg-gray-100 min-h-screen">

            <Sidebar />

            <div className="ml-64">

                <Navbar />

                <div className="p-8">

                    <h1 className="text-3xl font-bold text-center text-gray-700 mb-8">
                        Mi Perfil
                    </h1>

                    <div className="max-w-2xl mx-auto space-y-6">

                        <PerfilCard />

                        <PasswordForm />

                    </div>

                </div>

            </div>

        </div>

    )

}