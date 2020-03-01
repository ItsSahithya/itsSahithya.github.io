import { Component, OnInit } from '@angular/core';
import { DataService } from '../core/data.service';
import { IOrder } from '../shared/interface';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html'
})

export class OrdersComponent implements OnInit{
  orders: IOrder[];

  constructor (private dataService: DataService) {
  }
  
  ngOnInit() {
    this.dataService.getOrders().subscribe(
      (orders: IOrder[]) => 
         this.orders = orders
      );
  }

}


