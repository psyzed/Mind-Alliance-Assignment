import { ThisReceiver } from '@angular/compiler';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { NutritionService } from '../nutrition.service';

@Component({
  selector: 'app-ingredient-input',
  templateUrl: './ingredient-input.component.html',
  styleUrls: ['./ingredient-input.component.css'],
})
export class IngredientInputComponent implements OnInit {
  ingredientForm: FormGroup;

  constructor(private nutritionService: NutritionService) {}

  ngOnInit(): void {
    this.ingredientForm = new FormGroup({
      ingr: new FormArray([new FormControl(null, Validators.required)]),
    });
  }

  onAddIngredientInput() {
    const ingredientInput = new FormControl(null, Validators.required);
    (<FormArray>this.ingredientForm.get('ingr')).push(ingredientInput);
  }

  onDeleteInput(index: number) {
    (<FormArray>this.ingredientForm.get('ingr')).removeAt(index);
  }

  get controls() {
    return (<FormArray>this.ingredientForm.get('ingr')).controls;
  }

  onResetForm() {
    this.ingredientForm.reset();
    let controllersCount = (<FormArray>this.ingredientForm.get('ingr')).length;
    for (let i = 0; i < controllersCount; ++i) {
      (<FormArray>this.ingredientForm.get('ingr')).removeAt(1);
    }
  }

  onSubmit(ingredient: string[]) {
    this.nutritionService.submitIngredients(ingredient);
  }
}
