import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AnalyzerResult } from './analyzer-result.interface';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class NutritionService {
  data: AnalyzerResult;
  dataRecieved = new Subject<AnalyzerResult>();

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
        this.dataRecieved.next(this.data);
        console.log(responseData);
      });
  }

  resetResults() {
    this.dataRecieved.next(null);
  }
}
