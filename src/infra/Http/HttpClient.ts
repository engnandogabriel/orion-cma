export default interface HttpClient {
  get(url: string, token: any): Promise<any>;
  post(url: string, data: any, token: any): Promise<any>;
}
