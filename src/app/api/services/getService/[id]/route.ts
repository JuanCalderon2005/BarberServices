import { ServicesService } from "@/app/infrastructure/services/service.service";
import { NextResponse } from "next/server";


export async function GET({params}:{params:Promise<{id:number}>}){
    try {
        const GetServiceService= new ServicesService();
        const {id} = await params;
        const service = await GetServiceService.GetServiceById(id);

        return NextResponse.json(service, {status: 200});
    } catch (error) {
        console.log(error);
        return NextResponse.json({message: "Error"}, {status: 500});
    }
}