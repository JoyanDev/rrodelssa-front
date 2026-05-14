import { FaSearch, FaUserCircle } from 'react-icons/fa'

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

            <div className="text-5xl text-rose-500 cursor-pointer">
                <FaUserCircle />
            </div>

        </div>

    )

}