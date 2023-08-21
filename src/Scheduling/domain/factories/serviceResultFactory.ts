import { IServiceResult } from '../entities/serviceResult';

export class ServiceResultFactory {
  static fail(errorMessage: string): IServiceResult<null> {
    return {
      errorMessage,
      success: false,
    };
  }
  static fatal(exception: Error): IServiceResult<null> {
    return {
      errorMessage: exception?.message,
      exception,
      success: false,
    };
  }
  static success<T>(content: T): IServiceResult<T> {
    return {
      content,
      success: true,
    };
  }
}
