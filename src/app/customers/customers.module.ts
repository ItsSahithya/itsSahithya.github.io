import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { CustomersComponent } from './customers.component';
import { FiltersComponent } from './customers-list/filters.component';
import { CustomersListComponent } from './customers-list/customers-list.component';
import { SharedModule } from '../shared/shared.module';
import { CustomersRoutingModule } from './customers-routing.module';

@NgModule({
  declarations: [
    CustomersComponent,
    CustomersListComponent,
    FiltersComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    CustomersRoutingModule
  ],
  exports: [
      CustomersComponent
  ]
})
export class CustomersModule { }
