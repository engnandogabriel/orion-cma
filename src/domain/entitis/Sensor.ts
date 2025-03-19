export default class Sensor {
  private sensorId: string;
  private sensorType: string;
  private uom: string;
  private channelNumber: string;
  private customName: string;
  private scadaTag: string;

  private constructor(sensorId: string, sensorType: string, uom: string, channelNumber: string, customName: string, scadaTag: string) {
    this.sensorId = sensorId;
    this.sensorType = sensorType;
    this.uom = uom;
    this.channelNumber = channelNumber;
    this.customName = customName;
    this.scadaTag = scadaTag;
  }

  public static restore(sensorId: string, sensorType: string, uom: string, channelNumber: string, customName: string, scadaTag: string): Sensor {
    return new Sensor(sensorId, sensorType, uom, channelNumber, customName, scadaTag);
  }

  public getSensorId(): string {
    return this.sensorId;
  }
  public getSensorType(): string {
    return this.sensorType;
  }
  public getUom(): string {
    return this.uom;
  }
  public getChannelNumber(): string {
    return this.channelNumber;
  }
  private getCustomName(): string {
    return this.customName;
  }
  private getscadaTag(): string {
    return this.scadaTag;
  }
}
