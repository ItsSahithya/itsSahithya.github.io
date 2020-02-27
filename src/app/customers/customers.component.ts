import { Component, OnInit, ANALYZE_FOR_ENTRY_COMPONENTS } from '@angular/core';

import { ICustomer } from '.././shared/interface';
import { DataService } from '../core/data.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html'
})
export class CustomersComponent implements OnInit{
  title: String;
  people: ICustomer[];
  test: String = "two-way test";

  constructor(private dataService: DataService) {

  }

  ngOnInit() {
    this.title = 'Customers inner html';
    this.dataService.getCustomers()
          .subscribe((customers: ICustomer[]) => this.people = customers);
  }

  save(){
    alert("called me");
    console.log("example", this.test);
  }
}
