// src/components/usuario/Sidebar.jsx

'use client'

import Link from 'next/link'

export default function Sidebar() {

    return (

        <aside className="w-64 bg-[#001233] text-white min-h-screen flex flex-col justify-between p-6">

            <div>

                <h1 className="text-4xl font-bold text-cyan-400 mb-10 leading-tight">
                    RRODELSSA
                    <br />
                    PERÚ SAC
                </h1>

                <nav className="flex flex-col gap-5 text-lg">

                    <Link href="/usuario">
                        Materiales
                    </Link>

                    <a href="#cemento">
                        Cemento
                    </a>

                    <a href="#ladrillos">
                        Ladrillos
                    </a>

                    <a href="#fierros">
                        Fierros
                    </a>

                    <Link href="/">
                        Salir
                    </Link>

                </nav>

            </div>

            <p className="text-sm text-gray-300">
                © 2025 RRODELSSA PERÚ SAC
            </p>

        </aside>

    )

}