import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AnalyzerResult } from './analyzer-result.interface';

@Injectable({ providedIn: 'root' })
export class NutritionService {
  data: AnalyzerResult;

  constructor(private http: HttpClient) {}

  submitIngredients(ingredient: string[]) {
    this.http
      .post(
        'https://api.edamam.com/api/nutrition-details?app_id=' +
          environment.appId +
          '&app_key=' +
          environment.appKey,
        ingredient
      )
      .subscribe((responseData: AnalyzerResult) => {
        this.data = { ...responseData };
      });
  }
}
