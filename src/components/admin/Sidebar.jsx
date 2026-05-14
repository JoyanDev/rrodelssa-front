'use client'

import Link from 'next/link'
import { useState } from 'react'

import {
    FaTachometerAlt,
    FaUser,
    FaUsers,
    FaBox,
    FaSignOutAlt,
    FaChevronDown,
    FaChevronUp
} from 'react-icons/fa'

export default function Sidebar() {

    const [openProductos, setOpenProductos] = useState(false)

    return (

        <div className="w-64 min-h-screen bg-rose-500 text-white fixed left-0 top-0 shadow-xl">

            <div className="p-6 text-4xl font-bold border-b border-rose-400">
                RRODELSSA
            </div>

            <ul className="mt-6 flex flex-col gap-2 px-4">

                <Link href="/admin">
                    <li className="flex items-center gap-3 p-3 rounded-lg hover:bg-rose-400 transition cursor-pointer">
                        <FaTachometerAlt />
                        <span>Panel</span>
                    </li>
                </Link>

                <Link href="/admin/perfil">
                    <li className="flex items-center gap-3 p-3 rounded-lg hover:bg-rose-400 transition cursor-pointer">
                        <FaUser />
                        <span>Perfil</span>
                    </li>
                </Link>

                <Link href="/admin/usuarios">
                    <li className="flex items-center gap-3 p-3 rounded-lg hover:bg-rose-400 transition cursor-pointer">
                        <FaUsers />
                        <span>Usuarios</span>
                    </li>
                </Link>

                {/* PRODUCTOS */}
                <div className="mt-2">

                    <button
                        onClick={() =>
                            setOpenProductos(!openProductos)
                        }
                        className="
                            w-full
                            flex
                            items-center
                            justify-between
                            p-3
                            rounded-lg
                            hover:bg-rose-400
                            transition
                            cursor-pointer
                        "
                    >

                        <div className="flex items-center gap-3">
                            <FaBox />
                            <span>Productos</span>
                        </div>

                        {
                            openProductos
                                ? <FaChevronUp />
                                : <FaChevronDown />
                        }

                    </button>

                    {
                        openProductos && (

                            <div className="
                                ml-8
                                mt-3
                                flex
                                flex-col
                                gap-3
                                text-sm
                            ">

                                <Link href="/admin/productos/fierros">
                                    <span className="
                                        block
                                        hover:text-gray-200
                                        cursor-pointer
                                    ">
                                        - Fierros
                                    </span>
                                </Link>

                                <Link href="/admin/productos/cemento">
                                    <span className="
                                        block
                                        hover:text-gray-200
                                        cursor-pointer
                                    ">
                                        - Cemento
                                    </span>
                                </Link>

                                <Link href="/admin/productos/ladrillos">
                                    <span className="
                                        block
                                        hover:text-gray-200
                                        cursor-pointer
                                    ">
                                        - Ladrillos
                                    </span>
                                </Link>

                            </div>

                        )
                    }

                </div>

                <Link href="/">
                    <li className="flex items-center gap-3 p-3 rounded-lg hover:bg-red-600 transition cursor-pointer mt-10">
                        <FaSignOutAlt />
                        <span>Salir</span>
                    </li>
                </Link>

            </ul>

        </div>

    )

}