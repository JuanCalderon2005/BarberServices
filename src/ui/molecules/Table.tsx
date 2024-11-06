import React from 'react';

interface ITableProps {
  thead: string[];
  tbody: any[];
  onEdit?: (rowIndex: number) => void;
  onDelete?: (rowIndex: number) => void;
}

export default function TableComponent({ thead, tbody, onEdit, onDelete }: ITableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
        <thead className="bg-gradient-to-r from-indigo-600 to-indigo-600 text-white">
          <tr>
            {thead.map((header, index) => (
              <th key={index} className="py-3 px-6 text-left font-semibold uppercase tracking-wider">
                {header}
              </th>
            ))}
            <th className="py-3 px-6 text-left font-semibold uppercase tracking-wider">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {tbody.map((row, rowIndex) => (
            <tr key={rowIndex} className="hover:bg-gray-100 border-b border-gray-200">
              {thead.map((header, cellIndex) => (
                <td key={cellIndex} className="py-4 px-6 text-gray-700">
                  {row[header]}
                </td>
              ))}
              <td className="py-4 px-6 text-center space-x-2 flex">
                <button
                  className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded shadow-md transition duration-150"
                  onClick={() => onEdit && onEdit(rowIndex)}
                >
                  Editar
                </button>
                <button
                  className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded shadow-md transition duration-150"
                  onClick={() => onDelete && onDelete(rowIndex)}
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
