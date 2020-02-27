import { Component, OnInit, Input } from '@angular/core';

import { ICustomer } from '../.././shared/interface';
import { SortService } from '../../core/sort.service';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html'
})
export class CustomersListComponent implements OnInit { 
  private _customers: ICustomer[];
  filteredCustomers: ICustomer[];
  customerOrderTotal: any;
  currencyCode = 'USD';


  @Input() get customers(): ICustomer[] {
    return this._customers;
  }

  set customers(value: ICustomer[]) {
      if (value) {
          this.filteredCustomers = this._customers = value;
          //this.filteredCustomers = value;
          // this._customers = value;
           this.calculateOrders();

      }
  }


  constructor(private sortService: SortService) {

  }


  ngOnInit() {
  
  }   
  
  calculateOrders(): void {
    this.customerOrderTotal = 0;
    this.filteredCustomers.forEach((customer: ICustomer) => {
      this.customerOrderTotal += customer.orderTotal;
    //  this.customerOrderTotal = this.customerOrderTotal + customer.orderTotal;
   });
  }


  filter(data: string) {
    if (data) {
        this.filteredCustomers = this.customers.filter((cust: ICustomer) => {
            return cust.name.toLowerCase().indexOf(data.toLowerCase()) > -1 ||
                   cust.city.toLowerCase().indexOf(data.toLowerCase()) > -1 ||
                   cust.orderTotal.toString().indexOf(data) > -1;
        });
    } else {
        this.filteredCustomers = this.customers;
    }
    console.log("filteredCustomers" , this.filteredCustomers);
    this.calculateOrders();
  }

  sort(prop: string) {
    this.sortService.sort(this.filteredCustomers, prop);
    //this.filteredCustomers.sort();

  }

}
