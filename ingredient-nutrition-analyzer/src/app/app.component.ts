import { Component, OnInit } from '@angular/core';
import { NutritionService } from './nutrition.service';
import { AnalyzerResult } from './analyzer-result.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private nutritionService: NutritionService) {}

  title = 'ingredient-nutrition-analyzer';
  data: AnalyzerResult;
  isLoading = false;

  ngOnInit() {}
}
