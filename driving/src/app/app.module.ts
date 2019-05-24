import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { DrivingListComponent } from './driving-list/driving-list.component';
import { DrivingDetailComponent } from './driving-detail/driving-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    DrivingListComponent,
    DrivingDetailComponent
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule, NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }