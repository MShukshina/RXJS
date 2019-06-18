import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InputComponent } from './mymeny/input/input.component';
import { Output1Component } from './output1/output1.component';
import { Output2Component } from './output2/output2.component';
import { DataService} from './data.service';
import { MymenyComponent } from './mymeny/mymeny.component';
import {RouterModule, Routes} from '@angular/router';

const appRoutes: Routes = [
  { path: '', redirectTo: 'reader_1', pathMatch: 'full'},
  { path: 'reader_1', component: Output1Component},
  { path: 'reader_2', component: Output2Component},
];


@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    Output1Component,
    Output2Component,
    MymenyComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot((appRoutes))
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
