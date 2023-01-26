import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { bookDetails } from '../type/interface';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class HomePageService {
  private apiUrl =
    'https://bookcart.azurewebsites.net/api/ShoppingCart/AddToCart/23/61';

  constructor(private http: HttpClient) {}

  getdata() {
    return this.http.get<bookDetails[]>(
      'https://bookcart.azurewebsites.net/api/book'
    );
  }

  addToCart(item: any): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };

    return this.http
      .post<any>(this.apiUrl, item, httpOptions)
      .pipe(catchError(this.handleError('addToCart', item)));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
