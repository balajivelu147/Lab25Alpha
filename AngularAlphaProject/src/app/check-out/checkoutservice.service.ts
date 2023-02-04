import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CheckoutserviceService {

  constructor(private http: HttpClient) { }


  GetDetails(): Observable<any> {
    return this.http.get<any>('https://bookcart.azurewebsites.net/api/shoppingcart/1977');
  }

  CheckOutProcess(inpObj:any):Observable<any>{
    return this.http.post<any>('https://bookcart.azurewebsites.net/api/CheckOut/1977', inpObj);
  }
  
}
