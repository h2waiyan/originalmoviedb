import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  @ViewChild('loginform') LoginForm?: NgForm;

  constructor(private router: Router, private apiService: ApiService) { }

  email: string = '';
  password: string = '';

  login() {
    var result = this.apiService.login(
      {
        'email': this.email,
        'password': this.password
      }
    );

    result.subscribe({
      next: (response: any) => {
        if (response.status == 'success') {
          console.log(response)
          this.router.navigateByUrl('home');
          // navigate by url => home
        }
      },
      error: (err: HttpErrorResponse) => {
        console.log(err);
        const { message } = err['error'];
        alert(message);
      }
    })
  }
}
