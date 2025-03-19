import HttpResponse from '../../domain/Protocols/HttpResponse';
import HttpRequest from '../../domain/Protocols/HttpResquest';

export default interface UseCase {
  execute(input: HttpRequest, dataInput?: any): Promise<HttpResponse>;
}
