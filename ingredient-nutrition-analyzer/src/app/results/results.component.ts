import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AnalyzerResult } from '../analyzer-result.interface';
import { NutritionService } from '../nutrition.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css'],
})
export class ResultsComponent implements OnInit, OnDestroy {
  data: AnalyzerResult;
  dataRecievedSub: Subscription;

  constructor(private nutritionService: NutritionService) {}

  ngOnInit(): void {
    this.dataRecievedSub = this.nutritionService.dataRecieved.subscribe(
      (data: AnalyzerResult) => {
        this.data = data;
      }
    );
  }

  ngOnDestroy(): void {
    this.dataRecievedSub.unsubscribe();
  }
}
