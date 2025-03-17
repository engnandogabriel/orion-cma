import UseCase from '../application/useCase/UseCase';
import HttpServer from '../infra/Http/HttpServer';

export default class SensorController {
  constructor(
    readonly httpServer: HttpServer,
    readonly getInfoSensor: UseCase
  ) {
    this.httpServer?.on('get', '/get-info-sensor', async (req: any) => {
      const output = await this.getInfoSensor.execute(req);
      return output;
    });
  }
}
