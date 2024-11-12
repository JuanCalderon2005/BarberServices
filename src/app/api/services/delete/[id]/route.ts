import { ServicesService } from '@/app/infrastructure/services/service.service';
import { NextResponse } from 'next/server';


export async function DELETE(request:Request, {params}: {params: {id: number}}) {
    try {
        const servicesService = new ServicesService();
        const id = (await params).id;
        await servicesService.DeleteService(id);

        return NextResponse.json({message: "Service deleted"}, {status: 200});
    } catch (error) {
        console.log(error);
        return NextResponse.json({message: "Error"}, {status: 500});
    }
}