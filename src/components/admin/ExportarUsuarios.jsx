'use client'

import * as XLSX from 'xlsx'
import { saveAs } from 'file-saver'
import jsPDF from 'jspdf'
import autoTable from 'jspdf-autotable'

export default function ExportarUsuarios({usuarios}){

    const exportarExcel = ()=>{
        const datos = usuarios.map(usuario =>({
            ID: usuario.id,
            usuario: usuario.usuario,
            correo: usuario.correo,
            rol: usuario.rol
        }))
        const worksheet = XLSX.utils.json_to_sheet(datos)
        const workbook = XLSX.utils.book_new()

        XLSX.utils.book_append_sheet(
            workbook,
            worksheet,
            'usuarios'
        )

        const excelBuffer = XLSX.write(
            workbook,{
                bookType: 'xlsx',
                type: 'array'
            }
        )

        const fileData = new Blob(
            [excelBuffer],
            {
                type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
            }
        )
        saveAs(
            fileData,
            'usuarios.xlsx'
        )
    }

    const exportarPDF = ()=>{
        const doc = new jsPDF()

        doc.text(
            'Usuarios',
            14,
            15
        )

        autoTable(doc,{
            startY: 25,
            head: [[
                'ID',
                'Usuario',
                'Correo',
                'Rol'
            ]],
            body: usuarios.map(usuario=>[
                usuario.id,
                usuario.usuario,
                usuario.correo,
                usuario.rol
            ])
        })
        doc.save(
            'usuarios.pdf'
        )
    }

    return (
        <div className="flex gap-3">

            <button
                onClick={exportarExcel}
                title='Descargar en Excel'
                className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 cursor-pointer"
            >
                Excel
            </button>

            <button
                onClick={exportarPDF}
                title='Descargar en PDF'
                className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 cursor-pointer"
            >
                PDF
            </button>

        </div>
    )
}
