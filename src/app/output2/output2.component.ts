import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';

@Component({
  selector: 'app-output2',
  templateUrl: './output2.component.html',
  styleUrls: ['./output2.component.css']
})
export class Output2Component implements OnInit {

  public inputData: string;

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this.dataService.getInputData().subscribe((data: string) => {
      console.log('output2 ', data);
      this.inputData = data;
    });
  }

}
