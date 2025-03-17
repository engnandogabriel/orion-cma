import Devices from '../../domain/entitis/Devices';

export default interface DevicesGateway {
  getAllDevices(token: string): Promise<Devices[]>;
  getDeviceBySerialNumber(token: string, sereialNumber: string): Promise<Devices>;
}
