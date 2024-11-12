import { IRequestEditService } from '@/app/core/application/dto'
import Button from '@/ui/atoms/Button'
import { FormField } from '@/ui/molecules'
import { yupResolver } from '@hookform/resolvers/yup'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'

interface IProps {
    onClose: () => void
    serviceId: number
}

const registerSchema = yup.object().shape({
    name: yup.string().required('El nombre es requerido').min(2, 'El nombre debe tener al menos 2 caracteres'),
    description: yup.string().required('La descripción es requerida').min(1, 'La descripción debe tener al menos 1 caracter'),
    price: yup.number().typeError('El precio es requerido')
        .min(0.01, 'El precio debe ser mayor a 0')
})

const EditServiceForm = ({ onClose, serviceId }: IProps) => {
    const router = useRouter()
    const [isLoading, setIsLoading] = useState(true)
    const {
        control,
        handleSubmit: onSubmit,
        setValue,
        formState: { errors }
    } = useForm<IRequestEditService>({
        mode: 'onChange',
        resolver: yupResolver(registerSchema)
    })

    useEffect(() => {
        const fetchService = async () => {
            try {
              
                const response = await fetch(`/api/services/getservice/${serviceId}`)
                if (!response.ok) {
                    throw new Error('Error al obtener el servicio')
                }
                const data = await response.json()
                console.log(data)
                setValue('name', data.name)
                setValue('description', data.description)
                setValue('price', data.price)
            } catch (error) {
                console.error(error)
            }
        }
        fetchService()
    }), [serviceId, setValue]

    const handleEdit = async (data: IRequestEditService) => {
        try {
            const response = await fetch(`/api/services/edit/${serviceId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            if (!response.ok) {
                throw new Error('Error al editar el servicio')
            }
            router.refresh()
            onClose()
            return await response.json()
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <form onSubmit={onSubmit(handleEdit)} className="space-y-4 p-4 bg-white rounded shadow-md">
            <FormField<IRequestEditService>
                control={control}
                type='name'
                name="name"
                label="Nombre"
                error={errors.name}
                placeholder='Nombre del servicio'

            />

            <FormField<IRequestEditService>
                control={control}
                type='description'
                name="description"
                label="Descripción"
                error={errors.description}
                placeholder='Descripción del servicio'

            />

            <FormField<IRequestEditService>
                control={control}
                type='number'
                name="price"
                label="Precio"
                error={errors.price}
                placeholder='Precio del servicio'
            />

            <Button type='submit' label='Editar' className="w-full bg-indigo-500 text-white py-2 rounded" />
        </form>
    )
}

export default EditServiceForm