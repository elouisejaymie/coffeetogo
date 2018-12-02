import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { OrdersService } from '../../shared/services/orders.service';
import { IOrderHistory } from '../../shared/models/order.interface';

@Component({
    selector: 'order-history',
    templateUrl: './order-history.component.html'
})

export class OrderHistoryComponent implements OnInit, AfterViewInit {  
    displayedColumns: string[] = [];
    data: IOrderHistory[] = [];
    dataSource!: MatTableDataSource<IOrderHistory>;

    @ViewChild(MatPaginator) paginator!: MatPaginator;
    @ViewChild(MatSort) sort!: MatSort;


    constructor(private route: ActivatedRoute, private orderService: OrdersService) { }

    ngOnInit() {            
        this.route.data.pipe(map((data: any) => data.orderHistory)).subscribe((res: IOrderHistory[]) => {
            this.data = res;

            this.dataSource = new MatTableDataSource(res);

            this.displayedColumns = ['beverage', 'orderedBy', 'dateCreated'];
        });
    }

    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }
}