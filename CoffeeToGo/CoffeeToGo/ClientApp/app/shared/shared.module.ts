import { NgModule, ModuleWithProviders } from '@angular/core';
import { CustomModule } from './custom.module';
import { OrdersService } from './services/orders.service';
import { BeveragesService } from './services/beverages.service';
import { IngredientsService } from './services/ingredients.service';

@NgModule({
    imports: [
        CustomModule
    ],
    exports: [
        CustomModule
    ]
})

export class SharedModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: [
                OrdersService,
                BeveragesService,
                IngredientsService
            ]
        };
    }
}