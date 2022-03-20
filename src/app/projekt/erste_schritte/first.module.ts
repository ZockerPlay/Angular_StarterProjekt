import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FirstComponent } from './first.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    FirstComponent
  ],
  imports: [
    FormsModule,    
    BrowserModule,
    BrowserAnimationsModule,
  ],
  exports: [
    FirstComponent
  ]
})
export class FirstModule { }
