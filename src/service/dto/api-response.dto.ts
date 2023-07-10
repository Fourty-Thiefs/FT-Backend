// meanful response

export class ApiResponse<TData> {
  statusCode: number;
  message: string;
  data: TData;
}
