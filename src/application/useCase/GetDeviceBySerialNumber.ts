import Devices from '../../domain/entitis/Devices';
import { serverError, success } from '../../domain/Helpers/HttpHelpers';
import HttpResponse from '../../domain/Protocols/HttpResponse';
import HttpRequest from '../../domain/Protocols/HttpResquest';
import DevicesGateway from '../gateway/DevicesGateway';
import UseCase from './UseCase';

export default class GetDeviceBySerialNumberUseCase implements UseCase {
  private devicesGateway: DevicesGateway;
  constructor(devicesGateway: DevicesGateway) {
    this.devicesGateway = devicesGateway;
  }
  async execute(input: HttpRequest): Promise<HttpResponse> {
    try {
      const data: Devices = await this.devicesGateway.getDeviceBySerialNumber(input.body.token, input.body.serialNumber);
      return success({ message: 'Dispositivo', data: { data } });
    } catch (error) {
      if (error instanceof Error) {
        return serverError(error);
      }
      return serverError(new Error('Unexpected Error'));
    }
  }
}
