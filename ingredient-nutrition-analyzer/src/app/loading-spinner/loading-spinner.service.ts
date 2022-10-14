import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class LoadingSpinnerService {
  private _isLoading = new BehaviorSubject<boolean>(false);
  public readonly loading$ = this._isLoading.asObservable();

  startLoading() {
    this._isLoading.next(true);
  }

  stopLoading() {
    this._isLoading.next(false);
  }
}
