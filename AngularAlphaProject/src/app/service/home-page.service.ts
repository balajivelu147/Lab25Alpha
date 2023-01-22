import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { bookDetails } from '../type/interface';

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



}
