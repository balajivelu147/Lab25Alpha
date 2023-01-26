import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { }

  getBooks(){
    return this.http.get("https://bookcart.azurewebsites.net/api/book/GetCategoriesList")
  }
  getAllBooks(){
    return this.http.get("https://bookcart.azurewebsites.net/api/book")
  }

}
