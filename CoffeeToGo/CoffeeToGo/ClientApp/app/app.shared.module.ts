import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { CoreModule } from './core/core.module'
import { SharedModule } from './shared/shared.module';
import { AppComponent } from './app.component';

import 'hammerjs'

require('../../style/assets/1.jpg');
require('../../style/assets/2.jpg');
require('../../style/assets/3.jpg');

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        CommonModule,
        HttpModule,
        HttpClientModule,
        NoopAnimationsModule,
        FormsModule,
        CoreModule,
        SharedModule.forRoot()
    ]
})
export class AppModuleShared {
}
