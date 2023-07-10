"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BusinessLogicException = void 0;
const common_1 = require("@nestjs/common");
class BusinessLogicException extends common_1.HttpException {
    constructor(message) {
        super(message || 'Business Logic Exception', common_1.HttpStatus.BAD_REQUEST);
    }
}
exports.BusinessLogicException = BusinessLogicException;
//# sourceMappingURL=business-logic.exceptions.js.map