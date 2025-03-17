import DevicesGateway from '../gateway/DevicesGateway';
import UseCase from './UseCase';

export default class ListAllDevicesUseCase implements UseCase {
  private devicesGateway: DevicesGateway;
  constructor(devicesGateway: DevicesGateway) {
    this.devicesGateway = devicesGateway;
  }
  async execute(input: Input): Promise<any> {
    try {
      const data = await this.devicesGateway.getAllDevices(input.token);
      return data;
    } catch (e) {
      console.log(e);
    }
  }
}

type Input = {
  token: string;
};
