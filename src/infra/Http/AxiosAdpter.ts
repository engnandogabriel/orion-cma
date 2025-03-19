import HttpClient from './HttpClient';
import axios from 'axios';
export default class AxiosAdpter implements HttpClient {
  async get(url: string, token: string): Promise<any> {
    try {
      const response = await axios.get(url, { headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' } });
      return response.data;
    } catch (e: any) {
      throw new Error(e.response.data.message);
    }
  }
  async post(url: string, data: any, token: string): Promise<any> {
    try {
      const response = await axios.post(url, data, { headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' } });
      return response.data;
    } catch (e: any) {
      return e.response.data;
    }
  }
}
