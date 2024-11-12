'use client'
import { IResponseDataServices, Pageable } from '@/app/core/application/dto/services/services-response.dto'
import React, { useState } from 'react'
import Modal from '@/ui/atoms/Modal'
import CreateServiceForm from '@/ui/organisms/Service/CreateServiceForm'
import MainComponent from '@/ui/organisms/Main'
import EditServiceForm from '@/ui/organisms/Service/EditServiceForm'
import { useRouter } from 'next/navigation'

interface DataServicesProps {
    pagination: Pageable
    data: IResponseDataServices
}

export default function DataServices({ pagination, data }: DataServicesProps) {

    const router = useRouter();

    const [ModalOpenEmp, setModalOpenEmp] = useState(false);
    const [ModalOpenEdit, setModalOpenEdit] = useState(false);
    const [SelectIdEdit, setSelectIdEdit] = useState<number>(1);

    const toggleModalEmp = () => {
        setModalOpenEmp(!ModalOpenEmp);
    }

    const handleAdd = () => {
        toggleModalEmp();
    }

    const toggleModalEdit = () => {
        setModalOpenEdit(!ModalOpenEdit);
    }

    const handleEdit = (id: number) => {
        setSelectIdEdit(id);
        toggleModalEdit();
    }

    const handleDelete = async (id: number) => {
        try {
            const response = await fetch(`/api/services/delete/${id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                }
            });

            alert("Servicio eliminado exitosamente");
            router.refresh();
            return await response.json();

        } catch (error) {
            console.error("Error en el DELETE:", error);
            throw error;
        }
    };
    return (
        <div className="">
            <MainComponent onEdit={handleEdit} onDelete={(id) => handleDelete(id)} pagination={pagination} data={data} nameButtonAdd='Agregar Servicio' handleAdd={handleAdd} />
            <Modal isOpen={ModalOpenEmp} onClose={toggleModalEmp} title='Agregar Servicio'>
                <CreateServiceForm onClose={toggleModalEmp} />
            </Modal>

            <Modal isOpen={ModalOpenEdit} onClose={toggleModalEdit} title='Editar Servicio'>
                <EditServiceForm onClose={toggleModalEdit} serviceId={SelectIdEdit} />
            </Modal>
        </div>
    )
}
