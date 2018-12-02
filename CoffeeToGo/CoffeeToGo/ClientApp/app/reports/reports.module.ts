import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ChartsModule } from 'ng2-charts/ng2-charts';

import { SharedModule } from '../shared/shared.module';
import { ReportsRoutingModule } from './reports.routing.module';

import { OrderHistoryComponent } from './order-history/order-history.component';
import { DrinksDistributionComponent } from './drinks-distribution/drinks-distribution.component';
import { StocksComponent } from './stocks/stocks.component';
import { ReportsResolver } from './reports.resolver';

@NgModule({
    declarations: [
        OrderHistoryComponent,
        DrinksDistributionComponent,
        StocksComponent
    ],
    imports: [
        RouterModule,
        CommonModule,
        ChartsModule,
        SharedModule,
        ReportsRoutingModule
    ], exports: [
        RouterModule,
        OrderHistoryComponent,
        DrinksDistributionComponent,
        StocksComponent
    ],
    providers: [
        ReportsResolver
    ]
})

export class ReportsModule { }