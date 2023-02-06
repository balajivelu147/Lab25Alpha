import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckOutComponent } from './check-out/check-out.component';
import { ShopingcartComponent } from './shopingcart/shopingcart.component';
import { MyorderComponent } from './myorder/myorder.component';
import { BookdetailsComponent } from './bookdetails/bookdetails.component';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [
  {path:'', component: CheckOutComponent},
  {path:'bookdetails', component:BookdetailsComponent},
  {path:'Homepage', component:HomepageComponent},
  {path:'shopingcart', component: ShopingcartComponent},
  {path:'myorder', component: MyorderComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
