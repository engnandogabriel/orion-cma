import GetDeviceBySerialNumberUseCase from './application/useCase/GetDeviceBySerialNumber';
import GetInfoSensorUseCase from './application/useCase/GetInfoSensor';
import ListAllDevicesUseCase from './application/useCase/ListAllDevices';
import DevicesController from './controller/DevicesController';
import SensorController from './controller/SensorController';
import DevicesGatewayHttp from './infra/gateway/DevicesGatewayHttp';
import SensorGatewayHttp from './infra/gateway/SensorGatewayHttp';
import AxiosAdpter from './infra/Http/AxiosAdpter';
import ExpressAdpter from './infra/Http/ExpressAdpter';

const axiosAdpter = new AxiosAdpter();
const deviceGateway = new DevicesGatewayHttp(axiosAdpter);
const sensorGateway = new SensorGatewayHttp(axiosAdpter);
//use cases
const listAllDevices = new ListAllDevicesUseCase(deviceGateway);
const getDeviceBySerialNumber = new GetDeviceBySerialNumberUseCase(deviceGateway);
const getInfoSensor = new GetInfoSensorUseCase(sensorGateway);

const httpServer = new ExpressAdpter();
new DevicesController(httpServer, listAllDevices, getDeviceBySerialNumber);
new SensorController(httpServer, getInfoSensor);
httpServer.listen(3000);
