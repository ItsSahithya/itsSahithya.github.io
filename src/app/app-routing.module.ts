import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes =  [
    {path: '' , pathMatch: 'full', redirectTo:'/customers'},

  //  {path: '' , pathMatch: 'full', component:'customersComponetn'},

   // { path: '**', pathMatch: 'full', redirectTo: '/customers' }
  // path: localhost:4000/orders/1
]

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {

} 


