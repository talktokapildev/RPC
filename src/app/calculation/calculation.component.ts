import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { CalculationInputEntity } from "./calculation-input-entity";
import { CalculationService } from "./calculation.service";
import { IRetData } from "../shared/iret-data.model";

@Component({
  selector: 'rpc-calculation',
  templateUrl: './calculation.component.html',
  styleUrls: ['./calculation.component.css']
})
export class CalculationComponent implements OnInit {

  constructor(private calculationService:CalculationService) { 
    
    this.fullImagePath = '/assets/Spinner.gif'
  }

  ngOnInit() {
    //this.searchEntity.categoryId = 0;
    //this.getProducts();
    //this.getExecutionTypes();
    //this.calEntity.mainLimit = 3;
    this.loading = false;
  }

   // Public properties
   fullImagePath: string;
   loading:boolean;
  calResults: IRetData[] = [];
  messages: string[] = [];
  executionTypes: any = ['Simple', 'Complex'];
  calEntity: CalculationInputEntity = new CalculationInputEntity();

  // private getProducts() {
  //   this.productService.getProducts()
  //     .subscribe(products => this.products = products,
  //     errors => this.handleErrors(errors));
  // }
  // private getExecutionTypes() {
  //   this.categoryService.getSearchCategories()
  //     .subscribe(categories => this.searchCategories = categories,
  //     errors => this.handleErrors(errors));
  // }

  doCalculation(formValues) {
    this.loading = true;
    this.calculationService.getCalculatedData()
      .subscribe(retData => {
        this.calResults = retData;
         this.loading = false;
      },
      errors => this.handleErrors(errors));
  }

  

  private handleErrors(errors: any) {
    this.messages = [];

    for (let msg of errors) {
      this.messages.push(msg);
    }
  }
}
