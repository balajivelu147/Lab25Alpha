import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { CheckoutserviceService } from './check-out/checkoutservice.service';
import { MyorderComponent } from './myorder/myorder.component';
import { ShopingcartComponent } from './shopingcart/shopingcart.component';
import { BookdetailsComponent } from './bookdetails/bookdetails.component';
import { HomepageComponent } from './homepage/homepage.component';

@NgModule({
  declarations: [
    AppComponent,
    CheckOutComponent,
    MyorderComponent,
    ShopingcartComponent,
    BookdetailsComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [CheckoutserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
