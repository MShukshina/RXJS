import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';

@Component({
  selector: 'app-output1',
  templateUrl: './output1.component.html',
  styleUrls: ['./output1.component.css']
})
export class Output1Component implements OnInit {

  public inputData: string;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getInputData().subscribe((data: string) => {
      console.log('output1 ', data);
      this.inputData = data;
    });
  }

}
