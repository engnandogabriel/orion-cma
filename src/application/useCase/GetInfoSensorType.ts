import Devices from '../../domain/entitis/Devices';
import { success, serverError } from '../../domain/Helpers/HttpHelpers';
import HttpResponse from '../../domain/Protocols/HttpResponse';
import HttpRequest from '../../domain/Protocols/HttpResquest';
import DevicesGateway from '../gateway/DevicesGateway';
import UseCase from './UseCase';

export default class GetInfoSensorType implements UseCase {
  private devicesGateway: DevicesGateway;
  constructor(devicesGateway: DevicesGateway) {
    this.devicesGateway = devicesGateway;
  }
  async execute(input: HttpRequest, dataInput?: any): Promise<HttpResponse> {
    try {
      const data: Devices = await this.devicesGateway.getDeviceBySerialNumber(dataInput.token, input.params.serialNumber);
      const sensor = data.getSensor().filter((device) => device.getSensorType().toLowerCase() === input.params.type);
      const softSensor = data.getSensorSoft().filter((device) => device.getSensorType().toLowerCase() === input.params.type);
      data.setSensor(sensor);
      data.setSensorSoft(softSensor);
      return success({ message: `Dispositivos do tipo ${input.params.type}`, data: { ...data } });
    } catch (error) {
      if (error instanceof Error) {
        return serverError(error);
      }
      return serverError(new Error('Unexpected Error'));
    }
  }
}
