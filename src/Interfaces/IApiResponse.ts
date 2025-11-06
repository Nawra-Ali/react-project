
export interface IAPIResponse<T> {
    success: boolean;
    message: string;
    dataCount: number;
    data: T;
}
