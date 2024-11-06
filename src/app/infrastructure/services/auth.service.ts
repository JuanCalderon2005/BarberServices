import { ILoginRequest, ILoginResponse } from "@/app/core/application/dto";
import { IRequestAllServices } from "@/app/core/application/dto/services/services-request.dto";
import { IResponseDataServices } from "@/app/core/application/dto/services/services-response.dto";
import { PAuth } from "@/app/core/application/ports";
import { HttpClient } from "@/app/infrastructure/utils";

export class AuthService implements PAuth {
  private clientHttp: HttpClient;
  private basePath: string = "auth";

  constructor() {
    this.clientHttp = new HttpClient();
  }

  async login(req: ILoginRequest): Promise<ILoginResponse> {
    return this.clientHttp.post<ILoginResponse, ILoginRequest>(
      `${this.basePath}/login`,
      req
    );
  }

  async AllServices({ page, size }: IRequestAllServices): Promise<IResponseDataServices> {
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
}
