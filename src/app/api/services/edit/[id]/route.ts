import { IRequestEditService } from "@/app/core/application/dto";
import { ServicesService } from "@/app/infrastructure/services/service.service";
import { NextResponse } from "next/server";

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: number }> }
) {
  try {
    const body: IRequestEditService = await request.json();
    const useEditService = new ServicesService();
    const { id } = await params;
    const response = await useEditService.UpdateService(id, body);

    return NextResponse.json(response, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Error" }, { status: 500 });
  }
}
