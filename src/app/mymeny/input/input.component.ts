import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {DataService} from '../../data.service';
import {fromEvent, Observable} from 'rxjs';
import {mapTo} from 'rxjs/operators';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit, AfterViewInit {

  @ViewChild('inputEl', ({static: false})) inputEl: ElementRef;
  public inputData: string;

  constructor(private dataService: DataService) {
  }

  ngAfterViewInit(): void {
    const observable$: Observable<any> = fromEvent(this.inputEl.nativeElement, 'input');
    observable$.subscribe((res: any) => {
      this.inputData = res.target.value;
    });
    console.log('update input');
  }

  enterData() {
    this.dataService.setInputData(this.inputData);
  }

  ngOnInit() {
  }



}
