import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CheckoutserviceService } from './checkoutservice.service';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit {

  cartData: any[] = [];
  registerForm: any;
  submitted = false;

  constructor(private formBuilder: FormBuilder,
    private cartService: CheckoutserviceService) {
    this.GetDetails();
  }

  GetDetails() {
    this.cartService.GetDetails().subscribe({
      next: data1 => {
        this.cartData = data1;
      },
      error: error1 => {
        //console.error('There was an error!', error1);

      }
    });
  }
  
  checkOut() { 
    let obj = {"orderDetails":this.cartData, "cartTotal":this.total()}
    this.cartService.CheckOutProcess(obj).subscribe({
      next: data1 => {
        
      },
      error: error1 => {
        //console.error('There was an error!', error1);

      }
    });
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      address: ['', Validators.required],
      pincode: ['', Validators.required],
      phone: ['', Validators.required],
    });
  }

  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;

    if (this.registerForm.invalid) {
      return;
    }

    // alert(JSON.stringify(this.registerForm.value, null, 4));
  }

  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }



  total() {
    console.log(this.cartData);
    var add = 0;
    for (var i = 0; i < this.cartData.length; i++) {
      add += this.cartData[i].book.price * this.cartData[i].quantity
    }
    return add
  }

}
