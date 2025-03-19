import Sensor from './Sensor';
import SensorSoft from './SensorSoft';

export default class Devices {
  private deviceId: string;
  private deviceName: string;
  private reference: string;
  private serialNumber: string;
  private dateInstalled: string;
  private status: string;
  private lastUpload: string;
  private latitude: number;
  private longitude: number;
  private batteryPercentage: number;
  private sensor: Sensor[];
  private sensorSoft: SensorSoft[];

  private constructor(
    deviceId: string,
    deviceName: string,
    reference: string,
    serialNumber: string,
    dateInstalled: string,
    status: string,
    lastUpload: string,
    latitude: number,
    longitude: number,
    batteryPercentage: number,
    sensor: Sensor[],
    sensorSoft: SensorSoft[]
  ) {
    this.deviceId = deviceId;
    this.deviceName = deviceName;
    this.reference = reference;
    this.serialNumber = serialNumber;
    this.dateInstalled = dateInstalled;
    this.status = status;
    this.lastUpload = lastUpload;
    this.latitude = latitude;
    this.longitude = longitude;
    this.batteryPercentage = batteryPercentage;
    this.sensor = sensor;
    this.sensorSoft = sensorSoft;
  }

  public static restore(
    deviceId: string,
    deviceName: string,
    reference: string,
    serialNumber: string,
    dateInstalled: string,
    status: string,
    lastUpload: string,
    latitude: number,
    longitude: number,
    batteryPercentage: number,
    sensor: Sensor[],
    sensorSoft: SensorSoft[]
  ): Devices {
    return new Devices(deviceId, deviceName, reference, serialNumber, dateInstalled, status, lastUpload, latitude, longitude, batteryPercentage, sensor, sensorSoft);
  }

  public getDeviceId(): string {
    return this.deviceId;
  }

  public getDeviceName(): string {
    return this.deviceName;
  }

  public getReference(): string {
    return this.reference;
  }

  public getSerialNumber(): string {
    return this.serialNumber;
  }

  public getDateInstalled(): string {
    return this.dateInstalled;
  }

  public getStatus(): string {
    return this.status;
  }

  public getLastUpload(): string {
    return this.lastUpload;
  }

  public getLatitude(): number {
    return this.latitude;
  }

  public getLongitude(): number {
    return this.longitude;
  }

  public getBatteryPercentage(): number {
    return this.batteryPercentage;
  }
  public getSensor(): Sensor[] {
    return this.sensor;
  }
  public setSensor(sensor: Sensor[]): void {
    this.sensor = sensor;
  }
  public getSensorSoft(): SensorSoft[] {
    return this.sensorSoft;
  }
  public setSensorSoft(sensorSoft: SensorSoft[]) {
    this.sensorSoft = sensorSoft;
  }
}
