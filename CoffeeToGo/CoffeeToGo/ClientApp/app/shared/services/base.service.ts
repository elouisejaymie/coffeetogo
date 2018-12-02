import { throwError as observableThrowError, Observable } from 'rxjs';
import { Http, Headers } from '@angular/http';
import { HttpHeaders } from '@angular/common/http';

export abstract class BaseService {
    apiUrl: string =  'http://coffeetogoapi20181202045507.azurewebsites.net/api/';

    constructor() { }

    protected getDefaultHeader(): Headers {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');

        return headers;
    }
}