import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class NutritionService {
  constructor(private http: HttpClient) {}

  submitIngredients(ingredient: string) {
    console.log(ingredient);
    return this.http.post(
      'https://api.edamam.com/api/nutrition-details?app_id=' +
        environment.appId +
        '&app_key=' +
        environment.appKey,
      ingredient
    );
  }
}
