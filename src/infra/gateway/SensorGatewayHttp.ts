import SensorGateway from '../../application/gateway/SensorGatewat';
import InfoSensor from '../../domain/entitis/InfoSensor';
import HttpClient from '../Http/HttpClient';

export default class SensorGatewayHttp implements SensorGateway {
  private httpClient: HttpClient;
  private URL: string;

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
    this.URL = process.env.URL || 'https://api.oriondata.io/api';
  }

  async getInfoSensor(token: string, startDate: string, endDate: string, offSet: number = 0, softSensorId: string): Promise<InfoSensor[]> {
    const data = await this.httpClient.get(`${this.URL}/sensordata?startDate=${startDate}&endDate=${endDate}&offset=${offSet}&softSensorIds=${softSensorId}`, token);
    return data.map((device: any) => InfoSensor.restore(device.sensorId, device.softSensorId, device.readingDate, device.sensorValue));
  }
}
