import { IRequestEditService } from '@/app/core/application/dto'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'

interface IProps {
    onClose: () => void
    serviceId: number
}

const registerSchema = yup.object().shape({
    name: yup.string().required('El nombre es requerido').min(2, 'El nombre debe tener al menos 2 caracteres'),
    description: yup.string().required('La descripción es requerida').min(1, 'La descripción debe tener al menos 1 caracter'),
    price: yup.number().required('El precio es requerido'),
})

const EditServiceForm = ({ onClose, serviceId }: IProps) => {

    const router = useRouter()
    const [service, setService] = useState(true)
    const{
        control,
        handleSubmit:onSubmit,
        setValue,
        formState: { errors }
    }=useForm<IRequestEditService>({
        mode: 'onChange'

    })

    return (
        <div>EditServiceForm</div>
    )
}

export default EditServiceForm