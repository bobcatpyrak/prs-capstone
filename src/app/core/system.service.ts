import { Injectable } from '@angular/core';
import { User } from '../user/user.class';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SystemService 
{
  user: User = null;

  constructor(
    private router: Router
  ) { }

  isAdmin():boolean
  {
    return (this.user == null) ? false : this.user.admin;
  }

  isReviewer():boolean
  {
    return (this.user == null) ? false : this.user.reviewer;
  }

  checkLogin(): void
  {
    if(this.user == null)
    {
      console.log('User is not logged in... redirecting to login.');
      this.router.navigateByUrl('/login');
    }
  }
}
