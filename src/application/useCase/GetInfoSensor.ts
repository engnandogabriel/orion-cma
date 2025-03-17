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
  async execute(input: HttpRequest): Promise<HttpResponse> {
    try {
      const data: InfoSensor[] = await this.sensorGateway.getInfoSensor(input.body.token, input.body.startDate, input.body.endDate, input.body.offset, input.body.softSensorId);
      return success({ message: 'Informações do Sensor', data: { data } });
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
  startDate: string;
  endDate: string;
  offset: number;
  softSensorId: string;
};
