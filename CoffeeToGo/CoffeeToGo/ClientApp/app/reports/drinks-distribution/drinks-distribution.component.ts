import { Component, OnInit, ViewChild } from '@angular/core';
import { OrdersService } from '../../shared/services/orders.service';
import { IOrderSummary } from '../../shared/models/order.interface';

@Component({
    selector: 'drinks-distribution',
    templateUrl: './drinks-distribution.component.html'
})

export class DrinksDistributionComponent implements OnInit {
    chartLabels: string[] = [];
    chartData: number[] = [];
    chartType: string = 'pie';
    chartOptions: any = {};

    constructor(private orderService: OrdersService) { }

    ngOnInit() {
        this.orderService.getOrderSummary().subscribe((res: IOrderSummary[]) => {
            res.map(item => {
                let beverage = item.beverage !== undefined ? item.beverage : '';

                this.chartLabels.push(beverage);
                this.chartData.push(item.quantity);
            })

            this.chartOptions = {
                title: {
                    'display': true,
                    'text': 'Drinks Distribution',
                    'position': 'top',
                    'fontSize': 20,
                    'padding': 20
                },
                backgroundColor: [
                    "#FF6384",
                    "#4BC0C0",
                    "#E7E9ED",
                ],
                legend: {
                    'position': 'bottom'
                }
            }
        });
    }

    // events on slice click
    public chartClicked(e: any): void {
        console.log(e);
    }

    // event on pie chart slice hover
    public chartHovered(e: any): void {
        console.log(e);
    }

}