import { IRequestCreateService } from "../dto/services/createService-request.dto";
import { IResponseCreateService } from "../dto/services/createService-response.dto";
import { IRequestEditService } from "../dto/services/editService-request.dto";
import { IResponseEditService } from "../dto/services/editService-response.dto";
import { IRequestAllServices } from "../dto/services/services-request.dto";
import { IResponseDataServices } from "../dto/services/services-response.dto";

export interface PServices {
  /**
   * @param {IRequestAllServices} -service request
   * @returns {Promise<IResponseDataServices>}-service response
   */
  GetAllServices(req: IRequestAllServices): Promise<IResponseDataServices>;

  /**
   * @param {IRequestCreateService} -service request
   * @returns {Promise<IResponseCreateService>}-service response
   * */
  CreateService(
    service: IRequestCreateService
  ): Promise<IResponseCreateService>;

  /**
   * @param {number}-service id
   * @param {IRequestEditService}- service request
   * @returns {Promise<IResponseEditService>}-service response
   * */
  UpdateService(id:number,service: IRequestEditService): Promise<IResponseEditService>

  /**
   * @param {number}-service id
   * @param {IRequestAllServices}-service request
   * @returns {Promise<IResponseDataServices>}-service response
   * */

  GetServiceById(id:number, req: IRequestAllServices): Promise<IResponseDataServices>;

  /**
   * @param {number}-service id
   * @returns {Promise<void>}
   * */
  DeleteService(id:number): Promise<void>

}
