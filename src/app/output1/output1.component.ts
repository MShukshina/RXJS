import {Component, OnDestroy, OnInit} from '@angular/core';
import {DataService} from '../data.service';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-output1',
  templateUrl: './output1.component.html',
  styleUrls: ['./output1.component.css']
})
export class Output1Component implements OnInit, OnDestroy {

  public inputData: string;
  public inputDataSubscribe: any;

  subject$ = new Subject();

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.inputDataSubscribe = this.dataService.getInputData()
      .pipe(takeUntil(this.subject$))
      .subscribe((data: string) => {
      console.log('output1 ', data);
      this.inputData = data;
    });
  }

   ngOnDestroy() {
    // this.subject$.complete();
     this.inputDataSubscribe.unsubscribe();
   }
}
