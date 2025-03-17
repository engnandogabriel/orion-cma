import Devices from '../../domain/entitis/Devices';
import DevicesGateway from '../gateway/DevicesGateway';
import UseCase from './UseCase';

export default class GetDeviceBySerialNumberUseCase implements UseCase {
  private devicesGateway: DevicesGateway;
  constructor(devicesGateway: DevicesGateway) {
    this.devicesGateway = devicesGateway;
  }
  async execute(input: Input): Promise<Devices> {
    try {
      const data: Devices = await this.devicesGateway.getDeviceBySerialNumber(input.token, input.serialNumber);
      return data;
    } catch (e) {
      console.log(e);
      throw new Error('');
    }
  }
}
type Input = {
  token: string;
  serialNumber: string;
};
