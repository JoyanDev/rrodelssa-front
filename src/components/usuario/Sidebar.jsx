"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../../../public/img/logo_plateral.png";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <aside
      className={`
                bg-[#02494F] text-white min-h-screen flex flex-col justify-between p-6
                transition-all duration-300 ease-in-out
                ${isOpen ? "w-64" : "w-20"}
            `}
    >
      <div>
        <div className="flex items-center justify-between mb-8">
          {isOpen && (
            <Image
              src={logo}
              alt="Logo Rrodelssa Perú SAC"
              className="h-16 w-auto object-contain"
              priority
            />
          )}

          <button
            onClick={toggleSidebar}
            className="p-2 rounded-lg hover:bg-[#036068] transition cursor-pointer text-2xl text-white"
            title={isOpen ? "Ocultar panel" : "Mostrar panel"}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        <nav className="flex flex-col gap-5 text-lg">
          <Link
            href="/usuario"
            className="flex items-center gap-4 hover:text-cyan-300 transition"
          >
            {isOpen && <span>Materiales</span>}
          </Link>

          <a
            href="#cemento"
            className="flex items-center gap-4 hover:text-cyan-300 transition"
          >
            {isOpen && <span>Cemento</span>}
          </a>

          <a
            href="#ladrillos"
            className="flex items-center gap-4 hover:text-cyan-300 transition"
          >
            {isOpen && <span>Ladrillos</span>}
          </a>

          <a
            href="#fierros"
            className="flex items-center gap-4 hover:text-cyan-300 transition"
          >
            {isOpen && <span>Fierros</span>}
          </a>

          <Link
            href="/"
            className="flex items-center gap-4 hover:text-red-300 transition mt-6"
          >
            {isOpen && <span>Salir</span>}
          </Link>
        </nav>
      </div>

      {isOpen && (
        <p className="text-xs text-gray-300 text-center">
          © 2025 RRODELSSA PERÚ SAC
        </p>
      )}
    </aside>
  );
}
