import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { ICustomer } from '../shared/interface';

@Injectable()
export class DataService {
    // Use the following properties if running the Docker containers via Docker Compose
    // customersUrl = 'http://localhost:3000/api/customers';
    // ordersUrl = 'http://localhost:3000/api/orders';

    // Use the following properties if running the app stand-alone with no external dependencies
    customersUrl = 'assets/customers.json';  

    constructor(private http: HttpClient) { }

    getCustomers(): Observable<ICustomer[]> {
      return this.http.get<ICustomer[]>(this.customersUrl)
        .pipe(
          catchError(this.handleError)
        );

    }

  

    

    private handleError(error: any) {
      console.error('server error:', error);
      if (error.error instanceof Error) {
          const errMessage = error.error.message;
          return Observable.throw(errMessage);
      }
      return Observable.throw(error || 'Server error');
    } 

}
