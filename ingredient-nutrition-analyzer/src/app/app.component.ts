import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'ingredient-nutrition-analyzer';

  ingredientForm: FormGroup;

  ngOnInit() {
    this.ingredientForm = new FormGroup({
      name: new FormArray([new FormControl(null, Validators.required)]),
    });
  }

  onAddIngredients() {
    const ingredientInput = new FormControl(null, Validators.required);
    (<FormArray>this.ingredientForm.get('name')).push(ingredientInput);
  }

  onDelete(index: number) {
    (<FormArray>this.ingredientForm.get('name')).removeAt(index);
  }

  onSubmit() {
    console.log(this.ingredientForm);
  }

  get controls() {
    return (<FormArray>this.ingredientForm.get('name')).controls;
  }
}
