export default class SensorSoft {
  private sensorId: string;
  private sensorType: string;
  private uom: string;
  private customName: string;
  private scadaTag: string;

  private constructor(sensorId: string, sensorType: string, uom: string, customName: string, scadaTag: string) {
    this.sensorId = sensorId;
    this.sensorType = sensorType;
    this.uom = uom;
    this.customName = customName;
    this.scadaTag = scadaTag;
  }

  public static restore(sensorId: string, sensorType: string, uom: string, customName: string, scadaTag: string): SensorSoft {
    return new SensorSoft(sensorId, sensorType, uom, customName, scadaTag);
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

  private getCustomName(): string {
    return this.customName;
  }
  private getscadaTag(): string {
    return this.scadaTag;
  }
}
