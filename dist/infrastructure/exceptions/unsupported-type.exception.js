"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnsupportedTypeException = void 0;
const common_1 = require("@nestjs/common");
class UnsupportedTypeException extends common_1.HttpException {
    constructor(message) {
        super(message || 'Unsupported type exception', common_1.HttpStatus.UNSUPPORTED_MEDIA_TYPE);
    }
}
exports.UnsupportedTypeException = UnsupportedTypeException;
//# sourceMappingURL=unsupported-type.exception.js.map