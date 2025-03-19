import AuthenticationDecorator from '../application/decorator/AuthenticationDecorator';
import UseCase from '../application/useCase/UseCase';
import HttpServer from '../infra/Http/HttpServer';

export default class SensorController {
  constructor(
    readonly httpServer: HttpServer,
    readonly getInfoSensorDecorator: AuthenticationDecorator
  ) {
    this.httpServer?.on('get', '/get-info-sensor', async (req: any) => {
      const output = await this.getInfoSensorDecorator.execute(req);
      return output;
    });
  }
}
