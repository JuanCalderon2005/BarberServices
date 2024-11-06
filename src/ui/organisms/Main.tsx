'use client'
import { IResponseDataServices, Pageable } from '@/app/core/application/dto/services/services-response.dto';
import { useRouter, useSearchParams } from 'next/navigation';
import React from 'react';
import TableComponent from '../molecules/Table';
import ButtonPag from '../atoms/ButtonPag';

interface MainProps {
    onEdit: (rowIndex: number) => void;
    onDelete: (rowIndex: number) => void;
    pagination: Pageable;
    data: IResponseDataServices
}

export default function MainComponent({ onEdit, onDelete, pagination, data }: MainProps) {
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
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                
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
