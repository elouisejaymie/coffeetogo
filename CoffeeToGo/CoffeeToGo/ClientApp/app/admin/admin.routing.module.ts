import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate, PreloadAllModules } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { SuppliesComponent } from './supplies/supplies.component';

const routes: Routes = [
    { path: 'supplies', component: SuppliesComponent }  
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class AdminRoutingModule { }