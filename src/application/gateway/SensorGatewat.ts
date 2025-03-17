import InfoSensor from '../../domain/entitis/InfoSensor';

export default interface SensorGateway {
  getInfoSensor(token: string, startDate: string, endDate: string, offset:number, softSensorId: string): Promise<InfoSensor[]>;
}
