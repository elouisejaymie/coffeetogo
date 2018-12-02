import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { IngredientsService } from '../../shared/services/ingredients.service';
import { IIngredient } from '../../shared/models/ingredient.interface';
import { IIngredientPack } from '../../shared/models/ingredient-pack.interface';

@Component({
    selector: 'supplies',
    templateUrl: './supplies.component.html'
})

export class SuppliesComponent implements OnInit {
    suppliesForm!: FormGroup;
    ingredients: IIngredient[] = [];

    constructor(private formBuilder: FormBuilder, public snackBar: MatSnackBar, private ingredientService: IngredientsService) { }

    ngOnInit() {
        this.ingredientService.getIngredients().subscribe(res => {
            this.ingredients = res;
        })

        this.initializeForm();
    }

    initializeForm() {
        this.suppliesForm = this.formBuilder.group({
            'coffeebeans': [null],
            'sugar': [null],
            'milk': [null]
        })
    }

    onSuppliesFormSubmit(form: FormGroup) {
        let coffeebeans = form.controls.coffeebeans.value;
        let sugar = form.controls.sugar.value;
        let milk = form.controls.milk.value;

        const ingredientPack: IIngredientPack[] = [];

        if (coffeebeans != null) {
            let i = this.ingredients.find(x => x.ingredientId === 1);
            if (i !== undefined && i.remainingUnits !== undefined && i.unitsInPack !== undefined) {
                ingredientPack.push({
                    ingredientId: i.ingredientId,
                    count: +coffeebeans
                });
            }            
        }

        if (sugar != null) {
            let i = this.ingredients.find(x => x.ingredientId === 2);
            if (i !== undefined && i.remainingUnits !== undefined && i.unitsInPack !== undefined) {
                ingredientPack.push({
                    ingredientId: i.ingredientId,
                    count: +sugar
                });
            }
        }

        if (milk != null) {
            let i = this.ingredients.find(x => x.ingredientId === 3);
            if (i !== undefined && i.remainingUnits !== undefined && i.unitsInPack !== undefined) {
                ingredientPack.push({
                    ingredientId: i.ingredientId,
                    count: +milk
                });
            }
        }

        this.ingredientService.updateIngredientsInventory(ingredientPack).subscribe(() => {
            this.openSnackBar('Ingredients updated');
        });
    } 

    openSnackBar(message: string) {
        this.snackBar.open(message, '', {
            duration: 2000
        });
    }
}