import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class NutritionService {
  constructor(private http: HttpClient) {}

  submitIngredients(ingredient: string) {
    console.log(ingredient);
    return this.http.post(
      'https://api.edamam.com/api/nutrition-details?app_id=47379841&app_key=d28718060b8adfd39783ead254df7f92',
      ingredient
    );
  }
}
