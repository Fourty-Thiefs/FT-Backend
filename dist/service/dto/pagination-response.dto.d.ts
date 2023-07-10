export declare class PaginationResponse<TData> {
    totalCount: number;
    totalPage: number;
    currentPage: number;
    pageSize: number;
    hasPreviousPage: boolean;
    hasNextPage: boolean;
    items: Array<TData>;
}
