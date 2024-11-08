import { ServicesService } from "@/app/infrastructure/services/service.service";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: number }> }
) {
  try {
    console.log((await params).id);
    const GetServiceService = new ServicesService();
    const id = (await params).id;
    const service = await GetServiceService.GetServiceById(id);

    return NextResponse.json(service, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Error" }, { status: 500 });
  }
}
