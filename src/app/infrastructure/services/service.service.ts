import { IRequestAllServices } from "@/app/core/application/dto/services/services-request.dto";
import { IResponseDataServices } from "@/app/core/application/dto/services/services-response.dto";
import { HttpClient } from "../utils";
import { PServices } from "@/app/core/application/ports/service.port";
import { IRequestCreateService } from "@/app/core/application/dto/services/createService-request.dto";
import { IResponseCreateService } from "@/app/core/application/dto/services/createService-response.dto";

export class ServicesService implements PServices {
  private clientHttp: HttpClient;
  constructor() {
    this.clientHttp = new HttpClient();
  }

  async GetAllServices({
    page,
    size,
  }: IRequestAllServices): Promise<IResponseDataServices> {
    try {
      const response = await this.clientHttp.get<IResponseDataServices>(
        `services?page=${page}&size=${size}`
      );
      return response;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async CreateService(
    Service: IRequestCreateService
  ): Promise<IResponseCreateService> {
    try {
      const createService = await this.clientHttp.post<
        IResponseCreateService,
        IRequestCreateService
      >("services", Service);
      return createService;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}
