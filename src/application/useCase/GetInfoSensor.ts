import InfoSensor from '../../domain/entitis/InfoSensor';
import SensorGateway from '../gateway/SensorGatewat';
import UseCase from './UseCase';

export default class GetInfoSensorUseCase implements UseCase {
  private sensorGateway: SensorGateway;
  constructor(sensorGateway: SensorGateway) {
    this.sensorGateway = sensorGateway;
  }
  async execute(input: Input): Promise<InfoSensor[]> {
    try {
      const data: InfoSensor[] = await this.sensorGateway.getInfoSensor(input.token, input.startDate, input.endDate, input.offset, input.softSensorId);
      return data;
    } catch (e) {
      console.log(e);
      throw new Error('');
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
