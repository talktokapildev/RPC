import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { MinValidatorDirective } from "./shared/validator-min.directive";
import { AppComponent } from './app.component';
import { CalculationComponent } from './calculation/calculation.component';
import { CalculationService } from './calculation/calculation.service';
@NgModule({
  declarations: [
    AppComponent,
    CalculationComponent,
    MinValidatorDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [CalculationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
