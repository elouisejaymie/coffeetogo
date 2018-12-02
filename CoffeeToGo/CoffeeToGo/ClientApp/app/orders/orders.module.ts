import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import { OrdersRoutingModule } from './orders.routing.module';
import { OrdersComponent } from './orders.component';
import { OrdersListComponent } from './order-list/orders-list.component';

@NgModule({
    declarations: [
        OrdersComponent,
        OrdersListComponent
    ],    
    imports: [
        RouterModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        SharedModule,
        OrdersRoutingModule
    ], exports: [
        RouterModule,
        OrdersComponent,
        OrdersListComponent
    ],
})

export class OrdersModule { }