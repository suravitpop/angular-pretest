import { Component } from "@angular/core";
import { FormControl, FormGroup, FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule,Validators } from '@angular/forms';


@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})

export class AppComponent{
  numcheck = new FormControl('');
  numcheckform;
  Numchecker: Array<Object> = [
    { id: 0, name: "isPrime" },
    { id: 1, name: "IsFibonacci" }
  ];

  selected() {
    let num = this.numcheck.value;

    function isPrime(num) {
      for (var i = 2; i < num; i++)
        if (num % i === 0) return false;
      return num > 1;
    }
    
    function isFibonacci(num) {
      var fib,
        a = (5 * Math.pow(num, 2) + 4),
        b = (5 * Math.pow(num, 2) - 4)

      var result = Math.sqrt(a) % 1 == 0,
        res = Math.sqrt(b) % 1 == 0;

      //fixed this line
      if (result || res == true) // checks the given input is fibonacci series
      {
        return true;

      } else {
        return false;
      }
    }

    if (this.numcheckform.name == "isPrime") {
      return isPrime(num);
      } else {
       return isFibonacci(num);
      }
  }
  
}
