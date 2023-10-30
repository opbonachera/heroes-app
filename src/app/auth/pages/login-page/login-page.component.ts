import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout-page',
  templateUrl: './login-page.component.html',
  styles: [
  ]
})

export class LoginPageComponent {
  constructor(
    private authService: AuthService,
    private router: Router
  ){}

  onLogin():void{
    this.authService.login("obonachera@gmail.com","password")
    .subscribe(user=>{
      this.router.navigateByUrl("/")
    })
  }
}
