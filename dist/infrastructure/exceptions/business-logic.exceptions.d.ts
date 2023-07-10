import { HttpException } from '@nestjs/common';
export declare class BusinessLogicException extends HttpException {
    constructor(message: string);
}
