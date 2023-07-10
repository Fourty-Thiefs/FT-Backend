"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Guard = void 0;
const not_found_exceptions_1 = require("../exceptions/not-found.exceptions");
class Guard {
    static throwIfNull(obj, message) {
        throw new not_found_exceptions_1.NotFoundException(message);
    }
}
exports.Guard = Guard;
//# sourceMappingURL=handle-exception.guard.js.map