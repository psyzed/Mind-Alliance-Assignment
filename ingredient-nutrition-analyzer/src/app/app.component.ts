import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { NutritionService } from './nutrition.service';
import * as intefaces from './analyzer-result.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private nutritionService: NutritionService) {}

  title = 'ingredient-nutrition-analyzer';
  ingredientForm: FormGroup;
  public data: intefaces.AnalyzerResult;

  ngOnInit() {
    this.ingredientForm = new FormGroup({
      ingr: new FormArray([new FormControl(null, Validators.required)]),
    });
  }

  onAddIngredients() {
    const ingredientInput = new FormControl(null, Validators.required);
    (<FormArray>this.ingredientForm.get('ingr')).push(ingredientInput);
  }

  onDelete(index: number) {
    (<FormArray>this.ingredientForm.get('ingr')).removeAt(index);
  }

  onSubmit(ingredientForm) {
    this.nutritionService
      .submitIngredients(ingredientForm)
      .subscribe((responseData: intefaces.AnalyzerResult) => {
        this.data = { ...responseData };
      });
  }

  onReset() {
    this.data = null;
    this.ingredientForm.reset();
    let controllersCount = (<FormArray>this.ingredientForm.get('ingr')).length;
    for (let i = 0; i < controllersCount; ++i)
      (<FormArray>this.ingredientForm.get('ingr')).removeAt(i);
  }

  get controls() {
    return (<FormArray>this.ingredientForm.get('ingr')).controls;
  }
}
