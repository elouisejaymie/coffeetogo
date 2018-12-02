import { Component, OnInit, ViewChild } from '@angular/core';
import { IngredientsService } from '../../shared/services/ingredients.service';
import { IIngredient } from '../../shared/models/ingredient.interface';

@Component({
    selector: 'stocks',
    templateUrl: './stocks.component.html'
})

export class StocksComponent implements OnInit {
    chartOptions: any = {};
    chartType: string = 'bar';
    chartLegend: boolean = true;
    chartLabels: string[] = ['Ingredients'];
    chartData: any[] = [];

    constructor(private ingredientService: IngredientsService) { }

    ngOnInit() {
        this.ingredientService.getIngredients().subscribe((res: IIngredient[]) => {
            res.map(item => {
                let ingredient = item.name !== undefined ? item.name : '';
                let remainingUnits = item.remainingUnits !== undefined ? item.remainingUnits : 0;
                let unitsInPack = item.unitsInPack !== undefined ? item.unitsInPack : 0;
                let remaining = remainingUnits / unitsInPack;

                let data = { data: [remaining], label: item.name };
                
                this.chartData.push(data);
                
            })

            this.chartOptions = {
                scaleShowVerticalLines: false,
                responsive: true,
                title: {
                    'display': true,
                    'text': 'Remaining Ingredients',
                    'position': 'top',
                    'fontSize': 20,
                    'padding': 20
                },
                legend: {
                    'position': 'bottom'
                }
            };
        });
    }
            
    // events
    public chartClicked(e: any): void {
        console.log(e);
    }

    public chartHovered(e: any): void {
        console.log(e);
    }

}