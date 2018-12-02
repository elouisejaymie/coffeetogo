import { Inject, Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { OrdersService } from '../shared/services/orders.service'
import { IOrderHistory } from '../shared/models/order.interface';

@Injectable()
export class ReportsResolver implements Resolve<any> {
    constructor(private orderService: OrdersService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IOrderHistory[]> {
        return this.orderService.getOrderHistory();
    }
}