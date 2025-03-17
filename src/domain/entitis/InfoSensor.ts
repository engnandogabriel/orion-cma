export default class InfoSensor {
  private sensorId: string;
  private softSensorId: string;
  private readingDate: string;
  private sensorValue: number;

  private constructor(sensorId: string, softSensorId: string, readingDate: string, sensorValue: number) {
    this.sensorId = sensorId;
    this.softSensorId = softSensorId;
    this.readingDate = readingDate;
    this.sensorValue = sensorValue;
  }

  public static restore(sensorId: string, softSensorId: string, readingDate: string, sensorValue: number): InfoSensor {
    return new InfoSensor(sensorId, softSensorId, readingDate, sensorValue);
  }

  public getSensorId(): String {
    return this.sensorId;
  }

  public getSoftSensorId(): String {
    return this.softSensorId;
  }
  public getReadingDate(): String {
    return this.readingDate;
  }
  public getSensorValue(): number {
    return this.sensorValue;
  }
}
