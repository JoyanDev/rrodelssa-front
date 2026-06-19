'use client'

import Link from 'next/link'

export default function Sidebar() {

    return (

        <aside
            className="w-full md:w-64 bg-[#001233] text-white p-6 md:min-h-screen flex flex-col justify-between">

            <div>

                <h1 className="text-2xl md:text-4xl font-bold text-cyan-400 mb-6 md:mb-10 leading-tight text-center md:text-left">
                    RRODELSSA
                    <br />
                    PERÚ SAC
                </h1>

                <nav className="flex flex-wrap md:flex-col gap-4 md:gap-5 justify-center md:justify-start text-base md:text-lg">

                    <Link href="/usuario">
                        Materiales
                    </Link>

                    <Link href="/usuario?categoria=cemento">
                        Cemento
                    </Link>

                    <Link href="/usuario?categoria=ladrillos">
                        Ladrillos
                    </Link>

                    <Link href="/usuario?categoria=fierros">
                        Fierros
                    </Link>

                    <Link href="/">
                        Salir
                    </Link>

                </nav>

            </div>

            <p className="hidden md:block text-sm text-gray-300">
                © 2025 RRODELSSA PERÚ SAC
            </p>

        </aside>

    )

}