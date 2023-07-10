import { HttpException } from '@nestjs/common';
export declare class UnsupportedTypeException extends HttpException {
    constructor(message: string);
}
