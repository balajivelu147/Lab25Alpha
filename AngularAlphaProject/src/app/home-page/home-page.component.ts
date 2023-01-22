import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HomePageService } from '../service/home-page.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  constructor(private data: HomePageService, private snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.data.getdata().subscribe((response) => {
      this.listOfBooks = response;
      console.log(response);
    });
  }

  addToCartToast() {
    this.snackBar.open('One item added to cart', 'close', {
      duration: 5000,
      verticalPosition: 'top',
    });
  }

  selectItem(item: any) {
    item.isSelected = !item.isSelected;
    if (item.isSelected) {
      this.snackBar.open(item.title + ' added to your Wishlist', 'close', {
        duration: 3000,
        verticalPosition: 'top',
      });
    } else {
      this.snackBar.open(item.title + '  removed from your Wishlist', 'close', {
        duration: 3000,
        verticalPosition: 'top',
      });
    }
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


  listOfBooks: any[] = [];
}
