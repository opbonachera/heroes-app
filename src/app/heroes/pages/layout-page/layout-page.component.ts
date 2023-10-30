import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/auth/interfaces/user.interface';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styleUrls: ['./layout-page.component.css']
})

export class LayoutPageComponent {
  public sideBarItems = [{
    label: 'List', icon:'label', url: './list'
  },
  {  
    label: 'Add', icon: 'add', url:'./new-hero'
  },
  {
    label:'Search', icon:'search', url:'./search'
  }
  ]

  constructor(
    private authService:AuthService,
    private router: Router
  ){}

  onLogout(){
    this.authService.logout()
    this.router.navigate(['auth/login'])
  }

  get user(): User | undefined{
    return this.authService.loggedUser
  }
}
