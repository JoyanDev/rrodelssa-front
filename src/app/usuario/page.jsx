import Sidebar from '@/components/usuario/Sidebar'
import Portada from '@/components/usuario/Portada'
import Categorias from '@/components/usuario/Categorias'
import ProductosCategoria from '@/components/usuario/ProductosCategoria'

export default function UsuarioPage() {

    return (

        <div className="flex min-h-screen bg-gray-100">

            <Sidebar />

            <main className="flex-1 p-6">

                <Portada />

                <Categorias />

                <ProductosCategoria categoria="cemento" />

                <ProductosCategoria categoria="ladrillos" />

                <ProductosCategoria categoria="fierros" />

            </main>

        </div>

    )

}