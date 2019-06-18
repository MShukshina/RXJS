import { Injectable } from '@angular/core';
import {BehaviorSubject, fromEvent, Observable, Observer} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private inputData$ = new BehaviorSubject('');

  constructor() {
  }

  getInputData(): Observable<string> {
    return this.inputData$;
  }

  setInputData(data: string) {
    this.inputData$.next(data);
  }



}
