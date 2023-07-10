import { HomeService } from './home.service';
export declare class HomeController {
    private readonly homeService;
    constructor(homeService: HomeService);
    getUsers(): Array<any>;
    getHome(): string;
}
