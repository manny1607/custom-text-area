import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CustomTextAreaComponent } from './custom-text-area/custom-text-area.component';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [
      AppComponent,
      CustomTextAreaComponent
    ],
  imports: [
    BrowserModule,
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    CustomTextAreaComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
