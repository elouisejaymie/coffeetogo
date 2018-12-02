import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { OrdersComponent } from './orders.component';

const routes: Routes = [
    { path: '', component: OrdersComponent }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class OrdersRoutingModule { }