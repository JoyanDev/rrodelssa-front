// components/admin/StatCard.jsx

export default function StatCard({
    titulo,
    valor,
    icono
}) {

    return (

        <div className="
            bg-white
            rounded-lg
            shadow-md
            p-6
            flex
            items-center
            justify-between
            hover:shadow-lg
            transition
        ">

            <div>

                <h2 className="
                    text-4xl
                    font-bold
                    text-gray-700
                ">
                    {valor}
                </h2>

                <p className="
                    text-gray-500
                    text-lg
                    mt-1
                ">
                    {titulo}
                </p>

            </div>

            <div className="
                text-5xl
                text-rose-500
            ">
                {icono}
            </div>

        </div>

    )

}