import UseCase from '../application/useCase/UseCase';
import HttpServer from '../infra/Http/HttpServer';

export default class DeviceController {
  constructor(
    readonly httpServer: HttpServer,
    readonly listAllDevices: UseCase,
    readonly getDeviceBySerialNumber: UseCase
  ) {
    this.httpServer?.on('get', '/list-all-devices', async (req: any) => {
      const output = await this.listAllDevices.execute(req);
      return output;
    });
    this.httpServer?.on('get', '/get-by-serialNumber', async (req: any) => {
      const output = await this.getDeviceBySerialNumber.execute(req);
      return output;
    });
  }
}
