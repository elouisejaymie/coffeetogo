import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate, PreloadAllModules } from '@angular/router';
import { ModuleWithProviders } from "@angular/core";

const routes: Routes = [
    { path: '', redirectTo: 'orders', pathMatch: 'full' },
    { path: 'orders', loadChildren: '../orders/orders.module#OrdersModule' },
    { path: 'reports', loadChildren: '../reports/reports.module#ReportsModule' },
    { path: 'admin', loadChildren: '../admin/admin.module#AdminModule' },
    { path: '**', redirectTo: 'orders' }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
    ],
    exports: [RouterModule]
})
export class CoreRoutingModule { }