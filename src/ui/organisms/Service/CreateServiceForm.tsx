'use client'
import * as yup from 'yup';
import { FormField } from '@/ui/molecules';
import { useRouter } from 'next/navigation';
import { IRequestCreateService } from '@/app/core/application/dto/services/createService-request.dto';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Button from '@/ui/atoms/Button';

interface IProps {
    onClose: () => void;
}

const validationSchema = yup.object().shape({
    name: yup.string()
        .required('El nombre es requerido')
        .min(3, 'El nombre debe tener al menos 3 caracteres'),
    description: yup.string()
        .required('La descripción es requerida')
        .min(3, 'La descripción debe tener al menos 3 caracteres'),
    price: yup.number()
        .typeError('El precio es requerido')
        .min(0.01, 'El precio debe ser mayor a 0')
});

const CreateServiceForm = ({ onClose }: IProps) => {

    const router = useRouter();

    const {
        control,
        handleSubmit: onSubmit,
        formState: { errors }
    } = useForm<IRequestCreateService>({
        mode: 'onChange',
        reValidateMode: 'onChange',
        resolver: yupResolver(validationSchema),
    })

    const createService = async (data: IRequestCreateService) => {
        try {
            const response = await fetch('/api/services/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });
            if (!response.ok) {
                throw new Error('Error al crear servicio');
            }
            router.refresh();
            onClose();
            return await response.json();
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <form onSubmit={onSubmit(createService)} className="space-y-4 p-4 bg-white rounded shadow-md">
            <FormField<IRequestCreateService>
                control={control}
                type='name'
                name="name"
                label="Nombre"
                error={errors.name}
                placeholder='Nombre del servicio'

            />

            <FormField<IRequestCreateService>
                control={control}
                type='description'
                name="description"
                label="Descripción"
                error={errors.description}
                placeholder='Descripción del servicio'

            />

            <FormField<IRequestCreateService>
                control={control}
                type='number'
                name="price"
                label="Precio"
                error={errors.price}
                placeholder='Precio del servicio'
            />

            <Button type='submit' label='Registrar' className="w-full bg-indigo-500 text-white py-2 rounded" />
        </form>

    )
}

export default CreateServiceForm;
