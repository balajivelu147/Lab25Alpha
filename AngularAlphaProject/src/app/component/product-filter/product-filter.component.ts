import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/users.service';


@Component({
  selector: 'app-product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.scss']
})
export class ProductFilterComponent implements OnInit {

  constructor(private data: UsersService) { }

  ngOnInit(): void {

  }

  searchText: string = ""
  allactive: string = ""
  bioactive: string = ""
  fictionactive: string = ""
  mysteryactive: string = ""
  fantasyactive: string = ""
  romanceactive: string = ""
  initialvalue: number = 0;
  listOfBooks: any[] = [];
  bioBookList: any[] = [];
  fictionBookList: any[] = [];
  mysteryBookList: any[] = [];
  fantasyBookList: any[] = [];
  romanceBookList: any[] = [];
  inputRangeList: any[] = [];
  filteredBooks: number[] = [];
  categoryBookList: any[] = []


  rangevalue: number = 0;
  minimum: number = 0;

  //logic for price range slider
  valueChanged(e: any) {
    this.rangevalue = e.target.value;
    console.log("value of e", this.rangevalue)
    this.data.getAllBooks().subscribe((response: any) => {
      console.log("allbooks", response)
      response.forEach((element: any) => {
        if (element.price <= this.rangevalue && element.price >= this.minimum) {
          this.filteredBooks.push(element)
        }
      })
    })
  }

  //logic to display books based on category

  displayByCategory(data: any) {
    this.data.getAllBooks().subscribe((response: any) => {
      this.listOfBooks = response;
      console.log("response of all books", this.listOfBooks);
      if (data == 1) {
        this.allactive = "active"
        this.bioactive = ""
        this.fictionactive = ""
        this.romanceactive = ""
        this.mysteryactive = ""
        this.fantasyactive = ""
        this.listOfBooks = response;

      }
      this.listOfBooks.forEach((element: any) => {
        if (element.category == "Biography" && data == 2) {
          console.log("value is ", data)
          this.bioactive = "active"
          this.allactive = ""
          this.fictionactive = ""
          this.fantasyactive = ""
          this.romanceactive = ""
          this.mysteryactive = ""
          this.listOfBooks = []
          this.bioBookList.push(element);
          console.log("biography books", this.bioBookList)

        }
        else if (element.category == "Fiction" && data == 3) {
          console.log("value is ", data)
          this.listOfBooks = []
          this.bioBookList = []
          this.fictionactive = "active"
          this.allactive = ""
          this.bioactive = ""
          this.fantasyactive = ""
          this.romanceactive = ""
          this.mysteryactive = ""
          this.fictionBookList.push(element);

        } else if (element.category == "Mystery" && data == 4) {
          this.categoryBookList = []
          this.mysteryactive = "active"
          this.fictionactive = ""
          this.allactive = ""
          this.bioactive = ""
          this.fantasyactive = ""
          this.romanceactive = ""
          this.listOfBooks = []
          this.bioBookList = []
          this.fictionBookList = []
          this.mysteryBookList.push(element);

        } else if (element.category == "Fantasy" && data == 5) {
          this.fantasyactive = "active"
          this.mysteryactive = ""
          this.fictionactive = ""
          this.allactive = ""
          this.bioactive = ""
          this.romanceactive = ""
          this.listOfBooks = []
          this.bioBookList = []
          this.fictionBookList = []
          this.mysteryBookList = []
          this.fantasyBookList.push(element);

        } else if (element.category == "Romance" && data == 6) {
          this.romanceactive = "active"
          this.mysteryactive = ""
          this.fictionactive = ""
          this.allactive = ""
          this.bioactive = ""
          this.fantasyactive = ""
          this.listOfBooks = []
          this.bioBookList = []
          this.fictionBookList = []
          this.mysteryBookList = []
          this.fantasyBookList = []
          this.romanceBookList.push(element);
          
        }
      })
    })
  }


}

