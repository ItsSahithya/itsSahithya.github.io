import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { ICustomer } from '../shared/interface';

@Injectable()
export class SortService {

    property: string = null;
    direction = 1;

    sort(customerData: any[], prop: string) {
        this.property = prop;
        this.direction = this.direction * -1;

      



        customerData.sort((a: any, b: any) => {
            let aVal: any;
            let bVal: any;

            // Handle resolving complex properties such as 'state.name' for prop value
            if (prop && prop.indexOf('.') > -1) {
              aVal = this.resolveProperty(prop, a);
              bVal = this.resolveProperty(prop, b);
            }
            else {
              aVal = a[prop];
              bVal = b[prop];
            } 

            // Fix issues that spaces before/after string value can cause such as ' San Francisco'
            if (this.isString(aVal)) { aVal = aVal.trim().toUpperCase(); }
            if (this.isString(bVal)) { bVal = bVal.trim().toUpperCase(); }

            if (aVal === bVal) {
                return 0;
            }
            else if (aVal > bVal) {
                return this.direction * -1;
            }
            else {
                return this.direction * 1;
            }
        }); 
    }

    isString(val: any): boolean {
      return (val && (typeof val === 'string' || val instanceof String));
    }

    resolveProperty(path: string, obj: any) {
      return path.split('.').reduce(function(prev, curr) {
          return (prev ? prev[curr] : undefined);
      }, obj || self);
    }

}