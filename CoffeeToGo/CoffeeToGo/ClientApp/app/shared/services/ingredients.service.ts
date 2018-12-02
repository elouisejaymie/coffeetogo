import { Injectable, Inject, Output } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { BaseService } from "./base.service";
import { IIngredient } from '../models/ingredient.interface';
import { IIngredientPack } from '../models/ingredient-pack.interface';
import { IBeverageIngredient } from '../models/beverage-ingredient.interface';

@Injectable()
export class IngredientsService extends BaseService {
    constructor(private http: Http) {
        super();
    }

    getIngredients(): Observable<IIngredient[]> {
        let headers = this.getDefaultHeader();
        let options = new RequestOptions({ headers: headers });

        return this.http.get(this.apiUrl + 'ingredients/', options)
            .pipe(map(res => { return res.json() }))
            .pipe(map(items => {
                
                return items.map((item: IIngredient) => {     
                    let ingredient: IIngredient = {
                        ingredientId: item.ingredientId,
                        name: item.name,
                        remainingUnits: item.remainingUnits,
                        unitsInPack: item.unitsInPack
                    }

                    return ingredient;
                });
            }));
    }

    updateIngredientsInventory(ingredients: IIngredientPack[]): Observable<any> {
        let headers = this.getDefaultHeader();
        let options = new RequestOptions({ headers: headers });
        
        return this.http.post(this.apiUrl + 'ingredients/packs', ingredients, options);
    }

    getBeverageIngredients(): Observable<IBeverageIngredient[]> {
        let headers = this.getDefaultHeader();
        let options = new RequestOptions({ headers: headers });

        return this.http.get(this.apiUrl + 'ingredients/getbeverageingredients/', options)
            .pipe(map(res => { return res.json() }))
            .pipe(map(items => {
                return items.map((item: IBeverageIngredient) => {
                    
                    let ingredient: IBeverageIngredient = {
                        beverageId: item.beverageId,
                        ingredientId: item.ingredientId,
                        units: item.units
                    }

                    return ingredient;
                });
            }));
    }
}