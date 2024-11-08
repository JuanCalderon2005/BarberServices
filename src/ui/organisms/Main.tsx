'use client'
import { IResponseDataServices, Pageable } from '@/app/core/application/dto/services/services-response.dto';
import { useRouter, useSearchParams } from 'next/navigation';
import React from 'react';
import TableComponent from '../molecules/Table';
import ButtonPag from '../atoms/ButtonPag';
import Button from '../atoms/Button';

interface MainProps {
    onEdit: (rowIndex: number) => void;
    onDelete: (rowIndex: number) => void;
    pagination: Pageable;
    data: IResponseDataServices
    nameButtonAdd: string;
    handleAdd: () => void;
}

export default function MainComponent({ onEdit, onDelete, pagination, data, nameButtonAdd, handleAdd }: MainProps) {
    const searchParams = useSearchParams();
    const router = useRouter();

    const HandleClickNext = (nextPage: number) => {
        const params = new URLSearchParams(searchParams.toString());
        if (nextPage <= data.totalPages) {
            params.set('page', nextPage.toString());
            router.push(`?${params.toString()}`);
        }
    };

    const HandleClickBack = (backPage: number) => {
        const params = new URLSearchParams(searchParams.toString());
        if (backPage > 0) {
            params.set('page', backPage.toString());
            router.push(`?${params.toString()}`);
        }
    };

    const currentPagination = pagination.pageNumber + 1;
    const content = data.content;
    const thead = content.length > 0 ? Object.keys(content[0]) : [];
    const tbody = content;


    return (
        <main className="p-6 bg-gray-100 min-h-screen">
            <div className="bg-white rounded-lg shadow-md p-6 mb-6 flex flex-col gap-4">
                <div className="flex justify-between items-center">
                    <div className="flex-1 text-center">
                        <h1 className="text-2xl font-semibold text-gray-700">Servicios</h1>
                    </div>
                    <div className="flex-shrink-0">
                        <Button
                            onClick={handleAdd}
                            label={nameButtonAdd}
                            className="bg-indigo-600 text-white font-semibold py-2 px-4 rounded-lg shadow-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition duration-200"
                        />
                    </div>
                </div>
                <TableComponent
                    thead={thead}
                    tbody={tbody}
                    onEdit={onEdit}
                    onDelete={onDelete}
                />
            </div>
            <div className="flex items-center justify-center space-x-4 mt-4">
                <ButtonPag
                    label="<"
                    onClick={() => HandleClickBack(currentPagination - 1)}
                />
                <span className="text-gray-700">
                    Página {currentPagination} de {data.totalPages}
                </span>
                <ButtonPag
                    label=">"
                    onClick={() => HandleClickNext(currentPagination + 1)}
                />
            </div>
        </main>
    );
}
