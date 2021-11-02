export interface ControllerUseCases<T, R> {
  handle(request: T): Promise<R>;
}
