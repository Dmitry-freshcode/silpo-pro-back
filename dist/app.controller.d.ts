import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getHello(): string;
    getSilpo(): Promise<any>;
    getGoogle(): Promise<any>;
}
