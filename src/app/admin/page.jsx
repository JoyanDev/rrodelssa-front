import Sidebar from '@/components/admin/Sidebar'
import Navbar from '@/components/admin/Navbar'
import StatCard from '@/components/admin/StatCard'

import {
    FaUsers,
    FaBox,
    FaShoppingCart,
    FaMoneyBillWave
} from 'react-icons/fa'


async function getStats() {

    const res = await fetch(
        'http://localhost:4000/admin',
        {
            cache: 'no-store'
        }
    )

    return res.json()

}


export default async function AdminPage() {

    const stats = await getStats()

    return (

        <div className="bg-gray-100 min-h-screen">

            <Sidebar />

            <div className="ml-64">

                <Navbar />

                <div className="p-8">

                    <h1 className="text-4xl font-bold text-gray-800 mb-8">
                        Panel de Administración
                    </h1>

                    <div className="
                        grid
                        grid-cols-1
                        md:grid-cols-2
                        xl:grid-cols-4
                        gap-6
                    ">

                        <StatCard
                            titulo="Usuarios"
                            valor={stats.totalUsuarios}
                            icono={<FaUsers />}
                        />

                        <StatCard
                            titulo="Productos"
                            valor={stats.totalProductos}
                            icono={<FaBox />}
                        />

                        <StatCard
                            titulo="Pedidos"
                            valor="0"
                            icono={<FaShoppingCart />}
                        />

                        <StatCard
                            titulo="Ventas"
                            valor="S/ 0"
                            icono={<FaMoneyBillWave />}
                        />

                    </div>

                </div>

            </div>

        </div>

    )

}