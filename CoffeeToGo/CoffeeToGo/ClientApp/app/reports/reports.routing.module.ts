import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate, PreloadAllModules } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { OrderHistoryComponent } from './order-history/order-history.component';
import { DrinksDistributionComponent } from './drinks-distribution/drinks-distribution.component';
import { StocksComponent } from './stocks/stocks.component';
import { ReportsResolver } from './reports.resolver';

const routes: Routes = [
    { path: 'orderhistory', component: OrderHistoryComponent, resolve: { orderHistory: ReportsResolver } },
    { path: 'drinksdistribution', component: DrinksDistributionComponent },
    { path: 'stocks', component: StocksComponent }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class ReportsRoutingModule { }