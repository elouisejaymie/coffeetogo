import { Injectable, Inject, Output } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { BaseService } from "./base.service";
import { IBeverage } from '../models/beverage.interface';
import { IOrder, IOrderHistory, IOrderSummary } from '../models/order.interface';

@Injectable()
export class OrdersService extends BaseService {
    constructor(private http: Http) {
        super();
    }    

    getOrderHistory(): Observable<IOrderHistory[]> {
        let headers = this.getDefaultHeader();
        let options = new RequestOptions({ headers: headers });

        return this.http.get(this.apiUrl + 'orders/', options)
            .pipe(map(res => { return res.json() }))
            .pipe(map(items => {
                return items.map((item: any) => {
                    let order: IOrderHistory = {
                        beverage: item.beverage,
                        count: item.count,
                        orderedBy: item.orderedBy,
                        dateCreated: item.dateCreated
                    }

                    return order;
                });
            }));
    }

    getOrderSummary(): Observable<IOrderSummary[]> {
        let headers = this.getDefaultHeader();
        let options = new RequestOptions({ headers: headers });

        return this.http.get(this.apiUrl + 'orders/getorderdistribution/', options)
            .pipe(map(res => { return res.json() }))
            .pipe(map(items => {
                return items.map((item: any) => {
                    let orderSummary: IOrderSummary = {
                        beverage: item.beverage,
                        quantity: item.quantity
                    }

                    return orderSummary;
                });
            }));
    }

    saveOrders(orders: IOrder[]): Observable<any> {
        let headers = this.getDefaultHeader();
        let options = new RequestOptions({ headers: headers });

        return this.http.post(this.apiUrl + 'orders', orders, options);
    }
}