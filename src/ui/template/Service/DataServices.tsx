'use client'
import { IResponseDataServices, Pageable } from '@/app/core/application/dto/services/services-response.dto'
import React, { useState } from 'react'
import Modal from '@/ui/atoms/Modal'
import CreateServiceForm from '@/ui/organisms/Service/CreateServiceForm'
import MainComponent from '@/ui/organisms/Main'

interface DataServicesProps {
    pagination: Pageable
    data: IResponseDataServices
}

export default function DataServices({ pagination, data }: DataServicesProps) {

    const [ModalOpenEmp, setModalOpenEmp] = useState(false);

    const toggleModalEmp = () => {
        setModalOpenEmp(!ModalOpenEmp);
    }

    const handleAdd = () => {
        toggleModalEmp();
    }

    const handleEdit = () => {
        console.log('edit')
    }
    const handleDelete = () => {
        console.log('delete')
    }
    return (
        <div className="">
            <MainComponent onEdit={handleEdit} onDelete={handleDelete} pagination={pagination} data={data} nameButtonAdd='Agregar Servicio' handleAdd={handleAdd} />
            <Modal isOpen={ModalOpenEmp} onClose={toggleModalEmp} title='Agregar Servicio'>
                <CreateServiceForm onClose={toggleModalEmp} />

            </Modal>
        </div>
    )
}
