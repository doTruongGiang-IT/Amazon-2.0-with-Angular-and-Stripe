export interface ApiResponse<T> {
    success: boolean;
    status_code: number;
    data: any;
    error_code: string;
    error_message: string;
}