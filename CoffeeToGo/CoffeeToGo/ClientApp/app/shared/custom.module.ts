import { NgModule } from '@angular/core';
import {
    MatButtonModule,
    MatInputModule,
    MatPaginatorModule,
    MatSnackBarModule,
    MatTableModule
} from '@angular/material';

@NgModule({
    exports: [
        MatButtonModule,
        MatInputModule,
        MatPaginatorModule,
        MatSnackBarModule,
        MatTableModule
    ]
})

export class CustomModule { }