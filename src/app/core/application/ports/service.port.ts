import { IRequestCreateService } from "../dto/services/createService-request.dto";
import { IResponseCreateService } from "../dto/services/createService-response.dto";
import { IRequestAllServices } from "../dto/services/services-request.dto";
import { IResponseDataServices } from "../dto/services/services-response.dto";

export interface PServices {
    /**
   * @param {IRequestAllServices} -service request
   * @returns {Promise<IResponseDataServices>}-service response
   */
    GetAllServices(req: IRequestAllServices): Promise<IResponseDataServices>

    CreateService(service:IRequestCreateService):Promise<IResponseCreateService>
}

