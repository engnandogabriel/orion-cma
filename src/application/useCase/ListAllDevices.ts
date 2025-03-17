import { serverError, success } from '../../domain/Helpers/HttpHelpers';
import HttpResponse from '../../domain/Protocols/HttpResponse';
import HttpRequest from '../../domain/Protocols/HttpResquest';
import DevicesGateway from '../gateway/DevicesGateway';
import UseCase from './UseCase';

export default class ListAllDevicesUseCase implements UseCase {
  private devicesGateway: DevicesGateway;
  constructor(devicesGateway: DevicesGateway) {
    this.devicesGateway = devicesGateway;
  }
  async execute(input: HttpRequest): Promise<HttpResponse> {
    try {
      const data = await this.devicesGateway.getAllDevices(input.body.token);
      return success({ message: 'Lista de todos dispositivos', data: { data } });
    } catch (error) {
      if (error instanceof Error) {
        return serverError(error);
      }
      return serverError(new Error('Unexpected Error'));
    }
  }
}

type Input = {
  token: string;
};
