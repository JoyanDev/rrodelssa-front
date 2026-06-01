import Sidebar from '@/components/admin/Sidebar'
import Navbar from '@/components/admin/Navbar'
import ProductosTable from '@/components/admin/ProductosTable'
import ExportarProductos from '@/components/admin/ExportarProductos'

export default async function ProductosPage({ params }) {

    const { categoria } = await params

    const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/productos/${categoria}`,
        {
            cache: 'no-store'
        }
    )

    const data = await res.json()

    const productos = data.productos || []

    return (

        <div className="bg-gray-100 min-h-screen">

            <Sidebar />

            <div className="ml-64">

                <Navbar />

                <div className="p-8">

                    <div className="flex justify-between items-center mb-8">

                        <h1 className="text-3xl font-bold text-gray-700">
                            Productos - {categoria}
                        </h1>

                        <div className="flex gap-3">

                            <ExportarProductos
                                productos={productos}
                                categoria={categoria}
                            />

                            <button 
                            
                            title='Agregar productos'
                            className="w-12 h-12 rounded-full border-2 border-pink-500 text-pink-500 text-3xl hover:bg-pink-500 hover:text-white transition cursor-pointer">
                                +
                            </button>

                        </div>

                    </div>

                    <ProductosTable categoria={categoria} />

                </div>

            </div>

        </div>

    )
}