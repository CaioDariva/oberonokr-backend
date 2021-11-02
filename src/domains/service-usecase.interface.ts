export interface ServiceUseCase<T, U> {
  execute(request: T): Promise<U>;
}
