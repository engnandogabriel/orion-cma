import AuthenticationDecorator from './application/decorator/AuthenticationDecorator';
import GetDeviceBySerialNumberUseCase from './application/useCase/GetDeviceBySerialNumber';
import GetInfoSensorUseCase from './application/useCase/GetInfoSensor';
import GetInfoSensorType from './application/useCase/GetInfoSensorType';
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
const getInfoSensorType = new GetInfoSensorType(deviceGateway);

//decorator
const getInfoSensorAuthenticationDecorator = new AuthenticationDecorator(getInfoSensor);
const listAllDevicesDecorator = new AuthenticationDecorator(listAllDevices);
const getDeviceBySerialNumberDecorator = new AuthenticationDecorator(getDeviceBySerialNumber);
const getInfoSensorTypeAuthenticationDecorator = new AuthenticationDecorator(getInfoSensorType);

const httpServer = new ExpressAdpter();
new DevicesController(httpServer, listAllDevicesDecorator, getDeviceBySerialNumberDecorator, getInfoSensorTypeAuthenticationDecorator);
new SensorController(httpServer, getInfoSensorAuthenticationDecorator);
httpServer.listen(3001);
