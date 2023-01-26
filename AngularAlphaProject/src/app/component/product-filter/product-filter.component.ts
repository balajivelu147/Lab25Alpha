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

  listOfBooks: any[] = [];
  bioBookList: any[] = [];
  fictionBookList: any[] = [];
  mysteryBookList: any[] = [];
  fantasyBookList: any[] = [];
  romanceBookList: any[] = [];
  inputRangeList: any[] = [];
  filteredBooks: number[] = []


  rangevalue = 111;
  minimum = 111;

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


  displayAll() {
    this.allactive = "active"
    this.bioactive = ""
    this.fictionactive = ""
    this.romanceactive = ""
    this.mysteryactive = ""
    this.fantasyactive = ""
    this.data.getAllBooks().subscribe((response: any) => {
      console.log("response is", response)
      this.listOfBooks = response;
    })
  }

  displayBio() {
    this.bioactive = "active"
    this.allactive = ""
    this.fictionactive = ""
    this.fantasyactive = ""
    this.romanceactive = ""
    this.mysteryactive = ""
    this.data.getAllBooks().subscribe((response: any) => {
      this.listOfBooks = response;
      console.log("response of all books", this.listOfBooks);
      this.listOfBooks.forEach((element: any) => {
        if (element.category == "Biography") {
          this.listOfBooks = []
          this.bioBookList.push(element);
          console.log("element with biography category is ", this.bioBookList);
        }
      });
    })
  }

  displayFiction() {
    this.fictionactive = "active"
    this.allactive = ""
    this.bioactive = ""
    this.fantasyactive = ""
    this.romanceactive = ""
    this.mysteryactive = ""
    this.data.getAllBooks().subscribe((response: any) => {
      this.listOfBooks = response;
      console.log("response of all books", this.listOfBooks);
      this.listOfBooks.forEach((element: any) => {
        if (element.category == "Fiction") {
          this.listOfBooks = []
          this.bioBookList = []
          this.fictionBookList.push(element);
          console.log("mystery books", this.fictionBookList)
        }
      })
    })

  }

  displaymystery() {
    this.mysteryactive = "active"
    this.fictionactive = ""
    this.allactive = ""
    this.bioactive = ""
    this.fantasyactive = ""
    this.romanceactive = ""
    this.data.getAllBooks().subscribe((response: any) => {
      this.listOfBooks = response;
      console.log("response of all books", this.listOfBooks);
      this.listOfBooks.forEach((element: any) => {
        if (element.category == "Mystery") {
          this.listOfBooks = []
          this.bioBookList = []
          this.fictionBookList = []
          this.mysteryBookList.push(element);
          console.log("mystery books", this.mysteryBookList)
        }
      })
    })

  }
  displayfantasy() {
    this.fantasyactive = "active"
    this.mysteryactive = ""
    this.fictionactive = ""
    this.allactive = ""
    this.bioactive = ""
    this.romanceactive = ""
    this.data.getAllBooks().subscribe((response: any) => {
      this.listOfBooks = response;
      console.log("response of all books", this.listOfBooks)
      this.listOfBooks.forEach((element: any) => {
        if (element.category == "Fantasy") {
          this.listOfBooks = []
          this.bioBookList = []
          this.fictionBookList = []
          this.mysteryBookList = []
          this.fantasyBookList.push(element);
          console.log("fantasy book", this.fantasyBookList)
        }
      })
    })
  }
  displayromance() {
    this.romanceactive = "active"
    this.mysteryactive = ""
    this.fictionactive = ""
    this.allactive = ""
    this.bioactive = ""
    this.fantasyactive = ""
    this.data.getAllBooks().subscribe((response: any) => {
      this.listOfBooks = response;
      console.log("response of all books", this.listOfBooks)
      this.listOfBooks.forEach((element: any) => {
        if (element.category == "Romance") {
          this.listOfBooks = []
          this.bioBookList = []
          this.fictionBookList = []
          this.mysteryBookList = []
          this.fantasyBookList = []
          this.romanceBookList.push(element);
          console.log("romance", this.romanceBookList)
        }
      })
    })

  }
}

