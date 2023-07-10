"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const home_controller_1 = require("./controllers/homecontroller/home.controller");
const home_service_1 = require("./controllers/homecontroller/home.service");
const user_controller_1 = require("./controllers/usercontroller/user.controller");
const user_service_1 = require("./controllers/usercontroller/user.service");
let AppModule = exports.AppModule = class AppModule {
};
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [],
        controllers: [app_controller_1.AppController, home_controller_1.HomeController, user_controller_1.UserController],
        providers: [app_service_1.AppService, home_service_1.HomeService, user_service_1.UserService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map