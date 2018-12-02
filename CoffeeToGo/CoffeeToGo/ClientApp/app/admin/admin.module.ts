import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts/ng2-charts';

import { SharedModule } from '../shared/shared.module';
import { AdminRoutingModule } from './admin.routing.module';
import { SuppliesComponent } from './supplies/supplies.component';

@NgModule({
    declarations: [
        SuppliesComponent
    ],
    imports: [
        RouterModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        ChartsModule,
        SharedModule,
        AdminRoutingModule
    ], exports: [
        RouterModule,
        SuppliesComponent
    ],
    providers: [
        
    ]
})

export class AdminModule { }