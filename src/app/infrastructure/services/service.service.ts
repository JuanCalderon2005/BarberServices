import { IRequestAllServices } from "@/app/core/application/dto/services/services-request.dto";
import { IResponseDataServices } from "@/app/core/application/dto/services/services-response.dto";
import { HttpClient } from "../utils";
import { PServices } from "@/app/core/application/ports/service.port";
import { IRequestCreateService } from "@/app/core/application/dto/services/createService-request.dto";
import { IResponseCreateService } from "@/app/core/application/dto/services/createService-response.dto";
import {
  IRequestEditService,
  IResponseEditService,
} from "@/app/core/application/dto";

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

  async UpdateService(
    id: number,
    service: IRequestEditService
  ): Promise<IResponseEditService> {
    try {
      const updateService = await this.clientHttp.put<
        IResponseEditService,
        IRequestEditService
      >(`services/${id}`, service);
      return updateService;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async GetServiceById(id: number): Promise<IResponseDataServices> {
    try {
      const response = await this.clientHttp.get<IResponseDataServices>(
        `services/${id}`
      );
      console.log(response);
      return response;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async DeleteService(id: number): Promise<void> {
    try {
      await this.clientHttp.delete(`services/${id}`);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}
