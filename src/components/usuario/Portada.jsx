// src/components/usuario/Portada.jsx

import Image from 'next/image'

export default function Portada() {

    return (

        <section className="bg-white rounded-2xl shadow-md p-8 flex justify-between items-center mb-10">

            <div className="max-w-2xl">

                <h1 className="text-5xl font-bold text-teal-900 mb-6">
                    Bienvenido a RRODELSSA PERÚ SAC
                </h1>

                <p className="text-gray-700 text-lg leading-relaxed">
                    Somos una empresa peruana especializada en la
                    comercialización de materiales de construcción
                    de alta calidad. Nos comprometemos a ofrecer
                    productos confiables y un servicio ágil para
                    el sector construcción en todo el Perú.
                </p>

            </div>

            <Image
                src="/const.jpg"
                alt="Construcción"
                width={400}
                height={250}
                className="rounded-2xl object-cover"
            />

        </section>

    )

}