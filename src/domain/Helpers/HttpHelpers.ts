import HttpResponse from '../Protocols/HttpResponse';

export const badRequest = (error: Error): HttpResponse => ({
  statusCode: 400,
  body: {
    type: 'BadRequest',
    error: {
      name: error.name,
      message: error.message,
    },
  },
});

export const notFound = (error: Error): HttpResponse => ({
  statusCode: 404,
  body: {
    type: 'NotFound',
    error: {
      name: error.name,
      message: error.message,
    },
  },
});

export const forbidden = (error: Error): HttpResponse => ({
  statusCode: 403,
  body: {
    type: error.name,
    error: error.message,
  },
});

export const unauthorized = (error: Error): HttpResponse => ({
  statusCode: 401,
  body: {
    type: 'Unauthorized',
    error: {
      name: error.name,
      message: error.message,
    },
  },
});

export const serverError = (error: Error): HttpResponse => ({
  statusCode: 500,
  body: {
    type: 'ServerError',
    error: {
      name: error.name,
      message: error.message,
    },
  },
});

export const success = (data: any): HttpResponse => ({
  statusCode: 200,
  body: {
    type: 'Success',
    message: data.message,
    data: data.data,
  },
});

export const noContent = (): HttpResponse => ({
  statusCode: 204,
  body: null,
});
