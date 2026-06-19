'use client'

import { useSearchParams } from 'next/navigation'

import Sidebar from '@/components/usuario/Sidebar'
import Portada from '@/components/usuario/Portada'
import Categorias from '@/components/usuario/Categorias'
import ProductosCategoria from '@/components/usuario/ProductosCategoria'

export default function UsuarioPage() {

    const searchParams = useSearchParams()
    const categoria = searchParams.get('categoria')

    return (
        <div className="flex min-h-screen bg-gray-100">

            <Sidebar />

            <main className="flex-1 p-6">

                {!categoria ? (
                    <>
                        <Portada />
                        <Categorias />
                    </>
                ) : (
                    <ProductosCategoria categoria={categoria} />
                )}

            </main>

        </div>
    )
}