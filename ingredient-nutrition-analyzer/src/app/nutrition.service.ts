import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AnalyzerResult } from './analyzer-result.interface';
import { Subject } from 'rxjs';
import { LoadingSpinnerService } from './loading-spinner/loading-spinner.service';

@Injectable({ providedIn: 'root' })
export class NutritionService {
  data: AnalyzerResult;
  dataRecieved = new Subject<AnalyzerResult>();

  constructor(
    private http: HttpClient,
    private loadingSpinnerService: LoadingSpinnerService
  ) {}

  submitIngredients(ingredient: string[]) {
    this.loadingSpinnerService.startLoading();
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
        this.loadingSpinnerService.stopLoading();
      });
  }

  resetResults() {
    this.dataRecieved.next(null);
  }
}
