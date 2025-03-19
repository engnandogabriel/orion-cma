import DevicesGateway from '../../application/gateway/DevicesGateway';
import Devices from '../../domain/entitis/Devices';
import Sensor from '../../domain/entitis/Sensor';
import SensorSoft from '../../domain/entitis/SensorSoft';
import HttpClient from '../Http/HttpClient';

export default class DevicesGatewayHttp implements DevicesGateway {
  private httpClient: HttpClient;
  private URL: string;
  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
    this.URL = process.env.URL || 'https://api.oriondata.io/api';
  }

  async getAllDevices(token: string): Promise<Devices[]> {
    const data = await this.httpClient.get(`${this.URL}/userdevices`, token);
    return data.map((device: any) =>
      Devices.restore(
        device.deviceId,
        device.deviceName,
        device.reference,
        device.serialNumber,
        device.dateInstalled,
        device.status,
        device.lastUpload,
        device.latitude,
        device.longitude,
        device.batteryPercentage,
        device.sensors || [],
        device.softSensors || []
      )
    );
  }
  async getDeviceBySerialNumber(token: string, sereialNumber: string): Promise<Devices> {
    const [data] = await this.httpClient.get(`${this.URL}/userdevices?serialNumbers=${sereialNumber}`, token);
    const sensors: Sensor[] = [];
    const softSensor: SensorSoft[] = [];
    data.sensors.map((d: any) => {
      sensors.push(Sensor.restore(d.sensorId, d.sensorType, d.uom, d.channelNumber, d.customName, d.scadaTag));
    });
    data.softSensors.map((d: any) => {
      softSensor.push(SensorSoft.restore(d.softSensorId, d.sensorType, d.uom, d.customName, d.scadaTag));
    });
    const output = Devices.restore(
      data.deviceId,
      data.deviceName,
      data.reference,
      data.serialNumber,
      data.dateInstalled,
      data.status,
      data.lastUpload,
      data.latitude,
      data.longitude,
      data.batteryPercentage,
      sensors,
      softSensor
    );
    return output;
  }
}
