import { CommonModule } from '@angular/common';
import {NgModule,} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ResizableModule } from './resizable/resizable.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms'; 

@NgModule({
  imports: [BrowserModule, CommonModule, ResizableModule, ReactiveFormsModule, NoopAnimationsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
