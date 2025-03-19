import AuthenticationDecorator from '../application/decorator/AuthenticationDecorator';
import UseCase from '../application/useCase/UseCase';
import HttpServer from '../infra/Http/HttpServer';

export default class DeviceController {
  constructor(
    readonly httpServer: HttpServer,
    readonly listAllDevicesDecorator: AuthenticationDecorator,
    readonly getDeviceBySerialNumberDecorator: AuthenticationDecorator,
    readonly getInfoSensorType: AuthenticationDecorator
  ) {
    this.httpServer?.on('get', '/list-all-devices', async (req: any) => {
      const output = await this.listAllDevicesDecorator.execute(req);
      return output;
    });
    this.httpServer?.on('get', '/get-by-serialNumber/:serialNumber/', async (req: any) => {
      const output = await this.getDeviceBySerialNumberDecorator.execute(req);
      return output;
    });
    this.httpServer?.on('get', '/get-by-serialNumber/:serialNumber/:type', async (req: any) => {
      const output = await this.getInfoSensorType.execute(req);
      return output;
    });
  }
}
