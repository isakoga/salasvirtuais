export interface IServiceResult<T> {
  content?: T;
  errorMessage?: string;
  exception?: Error;
  success: boolean;
}
