import { Component, OnInit, OnDestroy } from '@angular/core';
import {DataService} from '../data.service';
import {Subscriber} from 'rxjs';

@Component({
  selector: 'app-output2',
  templateUrl: './output2.component.html',
  styleUrls: ['./output2.component.css']
})
export class Output2Component implements OnInit, OnDestroy {

  public inputData: string;
  public inputDataSubscribe: any;

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this.inputDataSubscribe = this.dataService.getInputData().subscribe((data: string) => {
      console.log('output2 ', data);
      this.inputData = data;
    });
  }

  ngOnDestroy() {
    this.inputDataSubscribe.unsubscribe();
  }
}
