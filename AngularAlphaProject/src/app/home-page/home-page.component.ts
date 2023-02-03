import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { HomePageService } from '../service/home-page.service';
import { bookDetails } from '../type/interface';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  constructor(
    private data: HomePageService,
    private snackBar: MatSnackBar,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.data.getdata().subscribe((response) => {
      this.listOfBooks = response;
    });


  }

  addToCartToast(book: any) {
    this.snackBar.open('One item added to cart', 'close', {
      duration: 3000,
      verticalPosition: 'top',
    });

   
    this.data.addToCart(book).subscribe(
      (data) => {
        console.log('Item added to cart:', data);
      },
      (error) => {
        console.log('Error adding item to cart:', error);
      }
    );

    localStorage.setItem("bookId/" + book.bookId, JSON.stringify(book));
    
  }

  addtoWishList(book: any) {
    book.isSelected = !book.isSelected;
    if (book.isSelected) {
      this.snackBar.open(book.title + ' added to your Wishlist', 'close', {
        duration: 3000,
        verticalPosition: 'top',
      });
    } else {
      this.snackBar.open(book.title + '  removed from your Wishlist', 'close', {
        duration: 3000,
        verticalPosition: 'top',
      });
    }

    this.data.addToCart(book).subscribe(
      (book) => {
        console.log('Item added to cart:', book);
      },
      (error) => {
        console.log('Error adding item to cart:', error);
      }
    );

    localStorage.setItem("bookId/" + book.bookId, JSON.stringify(book));
  }

  onMouseOver(item: any) {
    item.isHovered = true;
  }

  onMouseOut(item: any) {
    item.isHovered = false;
  }

  getTruncatedTitle(title: string) {
    const words = title.split(' ');
    if (words.length > 4) {
      return words.slice(0, 4).join(' ') + '...';
    } else {
      return title;
    }
  }

  openChildComponent(book:number){
    this.isProductDetailVisible = false
    this.router.navigate(['/book-details', book]);
   
  }



  isSelected : boolean = false

  selectedBook = {};

  listOfBooks: bookDetails[] = [];

  isProductDetailVisible: boolean = true;
}
