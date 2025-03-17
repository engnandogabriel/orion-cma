import GetDeviceBySerialNumber from './application/useCase/GetDeviceBySerialNumber';
import GetInfoSensorUseCase from './application/useCase/GetInfoSensor';
import GetDeviceBySerialNumberUseCase from './application/useCase/ListAllDevices';
import InfoSensor from './domain/entitis/InfoSensor';
import DevicesGatewayHttp from './infra/gateway/DevicesGatewayHttp';
import SensorGatewayHttp from './infra/gateway/SensorGatewayHttp';
import AxiosAdpter from './infra/Http/AxiosAdpter';

console.log('Projeto Node.js com TypeScript e Yarn iniciado!');
const axiosAdpter = new AxiosAdpter();
const deviceGateway = new DevicesGatewayHttp(axiosAdpter);
const infoGateway = new SensorGatewayHttp(axiosAdpter);

async function teste1() {
  const listAllDevicesUseCase = new GetDeviceBySerialNumberUseCase(deviceGateway);
  const data = await listAllDevicesUseCase.execute({ token: '' });
  console.log(data);
}

async function teste2() {
  const getDeviceBySerialNumber = new GetDeviceBySerialNumber(deviceGateway);
  const data = await getDeviceBySerialNumber.execute({ token: '', serialNumber: '301434060722520' });
  console.log(data);
}

async function teste3() {
  const getInfoSensor = new GetInfoSensorUseCase(infoGateway);
  const data = await getInfoSensor.execute({ token: '', startDate: '2025-03-16', endDate: '2025-03-17', offset: 0, softSensorId: '10332' });
  data.forEach((e: InfoSensor) => {
    console.log(e);
  });
}
teste3();
