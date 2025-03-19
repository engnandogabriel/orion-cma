export default class UnauthorizedError extends Error {
  constructor() {
    super('Unauthorized');
    this.name = 'UnauthorizedError';
    this.message = 'You do not have authorization';
  }
}
