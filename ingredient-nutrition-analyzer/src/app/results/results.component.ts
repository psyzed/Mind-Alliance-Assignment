import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AnalyzerResult } from '../analyzer-result.interface';
import { NutritionService } from '../nutrition.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css'],
})
export class ResultsComponent implements OnInit {
  data: AnalyzerResult;
  isLoading = false;
  dataRecievedSub: Subscription;

  constructor(private nutritionService: NutritionService) {}

  ngOnInit(): void {
    this.dataRecievedSub = this.nutritionService.dataRecieved.subscribe(
      (data) => {
        this.data = data;
      }
    );
  }
}
