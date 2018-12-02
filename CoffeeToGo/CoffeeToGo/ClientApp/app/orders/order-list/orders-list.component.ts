import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
﻿import { from } from 'rxjs/observable/from';
import { groupBy, mergeMap, toArray, elementAt } from 'rxjs/operators';

import { BeveragesService } from '../../shared/services/beverages.service';
import { OrdersService } from '../../shared/services/orders.service';
import { IngredientsService } from '../../shared/services/ingredients.service';

import { IBeverage } from '../../shared/models/beverage.interface';
import { IOrder, IOrderSummary } from '../../shared/models/order.interface';
import { IIngredient } from '../../shared/models/ingredient.interface';
import { IBeverageIngredient } from '../../shared/models/beverage-ingredient.interface';
import { error } from '@angular/compiler/src/util';
import { last } from '@angular/router/src/utils/collection';
import { merge } from 'rxjs';

@Component({
    selector: 'order-list',
    templateUrl: './order-list.component.html'
})

export class OrdersListComponent implements OnInit {
    stocks: IIngredient[] = [];
    beverageIngredients: IBeverageIngredient[] = [];
    orders: IOrder[] = [];
    beverages: IBeverage[] = [];
    orderSummary: IOrderSummary[] = [];
    orderForm!: FormGroup;
    orderitems!: FormArray;
    sendingOrder: boolean = false;

    readonly QTY_INITIAL = 1;

    constructor(private fb: FormBuilder, public snackBar: MatSnackBar, private orderService: OrdersService,
        private beveragesService: BeveragesService, private ingredientsService: IngredientsService) { }  

    ngOnInit() {
        this.beveragesService.getBeverages().subscribe((res: IBeverage[]) => {
            this.beverages = res; 
        });

        this.ingredientsService.getBeverageIngredients().subscribe((res: IBeverageIngredient[]) => {
            this.beverageIngredients = res;
        });

        this.ingredientsService.getIngredients().subscribe((res: IIngredient[]) => {
            this.stocks = res;
        });

        this.initializeForm();
    }

    initializeForm() {
        this.orderForm = this.fb.group({
            'name': [null, Validators.required],
            'specialrequests': [null]
        })
    }

    addToOrder(order: IBeverage) {

        let nextOrder: IOrder = {
            beverageId: order.beverageId,
            beverage: order.name
        }
        
        if (this.checkStocksAvailability(nextOrder) === true) {
            this.orders.push(nextOrder);

            this.updateOrderSummary();
        } else {
            this.openSnackBar('Not enough stocks');
        }
    
    }

    checkStocksAvailability(curOrder: IOrder): boolean {
        let isAvailable = true;

        let suppliesNeeded: IBeverageIngredient[] = [];
        let suppliesNeededSummary: IBeverageIngredient[] = [];

        if (this.orderSummary.length > 0) {
            this.orderSummary.map((order: IOrderSummary) => {
                suppliesNeeded.push(...this.getBeverageIngredients(order.beverageId, order.quantity));
            });
        }

        suppliesNeeded.push(...this.getBeverageIngredients(curOrder.beverageId, 1));

        let source = from(suppliesNeeded);
        source.pipe(
            groupBy(ingredient => ingredient.ingredientId),
            mergeMap(group => group.pipe(toArray()))).subscribe(res => {
                let merged: IBeverageIngredient = <IBeverageIngredient>{};
                let qty = 0;

                res.map(x => {
                    qty = qty + x.units;
                });

                merged = {
                    beverageId: res[0].beverageId,
                    ingredientId: res[0].ingredientId,
                    units: qty
                }

                suppliesNeededSummary.push(merged);
            });        

        suppliesNeededSummary.map((unitsNeeded) => {
            let stocks = this.stocks.find(x => x.ingredientId === unitsNeeded.ingredientId);

            if (isAvailable) {
                if (stocks !== undefined && stocks.remainingUnits !== undefined) {
                    if (stocks.remainingUnits >= unitsNeeded.units) {
                        isAvailable = true;
                    }
                    else {
                        isAvailable = false;
                    }
                }
                else {
                    isAvailable = false;
                }
            }
        })

        return isAvailable;
    }

    getBeverageIngredients(beverageId: number | undefined, qty: number): IBeverageIngredient[] {        
        let beverageIngredients = this.beverageIngredients.filter(x => x.beverageId === beverageId);
        let ingredients: IBeverageIngredient[] = [];

        beverageIngredients.map(item => {
            let bi: IBeverageIngredient = {
                beverageId: item.beverageId,
                ingredientId: item.ingredientId,
                units: item.units * qty
            }

            ingredients.push(bi);
        })
          
        return ingredients;
    }

    updateOrderSummary() {
        let source = from(this.orders);

        source.pipe(
            groupBy(beverage => beverage.beverageId),
            mergeMap(group => group.pipe(toArray()))).subscribe(res => {
                let order: IOrderSummary = {
                    beverageId: res[0].beverageId,
                    beverage: res[0].beverage,
                    quantity: res.length
                }

                let curOrder = this.orderSummary.find(x => x.beverageId === order.beverageId);

                if (curOrder === undefined) {
                    this.orderSummary.push(order);
                } else {
                    curOrder.quantity = order.quantity;
                }
            });
    }

    removeFromOrder(order: IOrder) {
        let curOrder = this.orders.find(x => x.beverageId === order.beverageId);
        
        if (curOrder !== undefined) {

            let index = this.orders.lastIndexOf(order);

            this.orders.splice(index, 1);

            this.updateOrderSummary();
        }        
    }

    onOrderFormSubmit() {
        this.sendingOrder = true;

        let orders = this.orders;

        orders.map(x => {
            x.orderedBy = this.orderForm.controls.name.value;
            x.notes = this.orderForm.controls.specialrequests.value;
        })

        this.orderService.saveOrders(orders).subscribe(res => {
            this.sendingOrder = false;
            this.openSnackBar('Order sent');
        })
    }

    onOrderCancel() {
        this.orders = [];

        this.orderForm.reset();
    }

    openSnackBar(message: string) {
        this.snackBar.open(message, '', {
            duration: 2000
        });
    }
}