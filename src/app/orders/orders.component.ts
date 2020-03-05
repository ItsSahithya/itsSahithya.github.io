import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { DataService } from '../core/data.service';
import { IOrder, ICustomer } from '../shared/interface';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html'
})

export class OrdersComponent implements OnInit{
  orders: IOrder[];
  customer: ICustomer;

  constructor (private dataService: DataService,
               private route: ActivatedRoute) {
  }
  
  ngOnInit() {
    // const orderId: number= parseInt(this.route.snapshot.paramMap.get('id'));
    const id = +this.route.snapshot.paramMap.get('id');

    console.log(this.route);
  //  "1" - 1
  //  const id = +this.route.snapshot.paramMap.get('id');

    this.dataService.getOrdersByCustomerId(id).subscribe(
      (orders: IOrder[]) => {
         this.orders = orders;
        // console.log(this.orders);
      });

      this.dataService.getCustomer(id).subscribe((customer: ICustomer) => {
        this.customer = customer;
      });
  }

}


