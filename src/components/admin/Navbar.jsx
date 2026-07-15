import { FaSearch } from "react-icons/fa";
import usuario from "@/app/data/user";

export default function Navbar() {
    return (
        <div className="bg-white h-20 shadow-md flex items-center justify-between px-8">

            <div className="flex items-center bg-gray-100 rounded-lg overflow-hidden w-[400px]">
                <input
                    type="text"
                    placeholder="Buscar..."
                    className="w-full bg-transparent px-4 py-3 outline-none text-black"
                />

                <button className="px-4 text-gray-600">
                    <FaSearch />
                </button>
            </div>

            <img
                src={usuario.foto}
                alt={usuario.nombre}
                className="w-12 h-12 rounded-full object-cover border-2 border-pink-500 cursor-pointer"
            />

        </div>
    );
}