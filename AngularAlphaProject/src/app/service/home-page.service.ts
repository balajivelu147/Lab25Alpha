import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { bookDetails } from '../type/interface';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HomePageService {


  constructor(private http: HttpClient) {}

  getdata() {
    return this.http.get<bookDetails[]>(
      'https://bookcart.azurewebsites.net/api/book'
    );
  }

  addToCart(book: any): Observable<any> {
    return this.http
      .post<any>(`https://bookcart.azurewebsites.net/api/ShoppingCart/AddToCart/23/${book.bookId}`, book);
  }

  }

