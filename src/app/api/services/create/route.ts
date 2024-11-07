import { IRequestCreateService } from "@/app/core/application/dto/services/createService-request.dto";
import { ServicesService } from "@/app/infrastructure/services/service.service";
import { NextResponse } from "next/server";

export const servicesService = new ServicesService();

export async function POST(req:Request){
    try {
        const body:IRequestCreateService = await req.json();
        const newService = await servicesService.CreateService(body);

        return NextResponse.json(newService, {status: 200});
    } catch (error) {
        console.log(error);
        return NextResponse.json({message: "Error"}, {status: 500});
    }
}