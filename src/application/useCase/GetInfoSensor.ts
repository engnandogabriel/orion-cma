import InfoSensor from '../../domain/entitis/InfoSensor';
import { serverError, success } from '../../domain/Helpers/HttpHelpers';
import HttpResponse from '../../domain/Protocols/HttpResponse';
import HttpRequest from '../../domain/Protocols/HttpResquest';
import SensorGateway from '../gateway/SensorGatewat';
import UseCase from './UseCase';

export default class GetInfoSensorUseCase implements UseCase {
  private sensorGateway: SensorGateway;
  constructor(sensorGateway: SensorGateway) {
    this.sensorGateway = sensorGateway;
  }
  async execute(input: HttpRequest, dataInput: any): Promise<HttpResponse> {
    try {
      const data: InfoSensor[] = await this.sensorGateway.getInfoSensor(dataInput.token, input.query.startDate, input.query.endDate, input.query.offset, input.query.softSensorId);
      return success({ message: 'Informações do Sensor', data: { data } });
    } catch (error) {
      if (error instanceof Error) {
        return serverError(error);
      }
      return serverError(new Error('Unexpected Error'));
    }
  }
}
