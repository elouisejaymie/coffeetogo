import { Injectable, Inject, Output } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { BaseService } from "./base.service";
import { IBeverage } from '../models/beverage.interface';

@Injectable()
export class BeveragesService extends BaseService {
    constructor(private http: Http) {
        super();
    }

    getBeverages(): Observable<IBeverage[]> {
        let headers = this.getDefaultHeader();
        let options = new RequestOptions({ headers: headers });

        return this.http.get(this.apiUrl + 'beverages/', options)
            .pipe(map(res => { return res.json() }))
            .pipe(map(items => {
                return items.map((item: IBeverage) => {
                    let beverage: IBeverage = {
                        beverageId: item.beverageId,
                        name: item.name
                    }

                    return beverage;
                });
            }));
    }
}