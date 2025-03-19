import UnauthorizedError from '../../domain/Error/UnauthorizedError';
import { serverError, unauthorized } from '../../domain/Helpers/HttpHelpers';
import HttpResponse from '../../domain/Protocols/HttpResponse';
import UseCase from '../useCase/UseCase';

export default class AuthenticationDecorator {
  constructor(readonly useCase: UseCase) {}
  async execute(input: any): Promise<HttpResponse> {
    try {
      const token = input.headers.authorization && input.headers.authorization.split(' ')[1];
      if (!token) return unauthorized(new UnauthorizedError());
      const output = await this.useCase.execute({ body: input.body, params: input.params, query: input.query }, { token: token });
      return output;
    } catch (error) {
      if (error instanceof Error) {
        return serverError(error);
      }
      return serverError(new Error('Unexpected Error'));
    }
  }
}
