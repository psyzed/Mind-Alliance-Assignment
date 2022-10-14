import { Component, OnInit } from '@angular/core';
import { LoadingSpinnerService } from './loading-spinner.service';

@Component({
  selector: 'app-loading-spinner',
  template: '<div class="lds-hourglass" *ngIf="isLoading | async"></div>',
  styleUrls: ['./loading-spinner.component.css'],
})
export class LoadingSpinnerComponent implements OnInit {
  isLoading = this.loadingSpinnerService.loading$;

  constructor(private loadingSpinnerService: LoadingSpinnerService) {}

  ngOnInit(): void {}
}
