import { Injectable } from '@angular/core';
import { User } from '../user/user.class';

@Injectable({
  providedIn: 'root'
})
export class SystemService 
{
  user: User = new User();

  constructor() { }

  setUser(u: User):void
  {
    this.user = u;
  }

  getUser(): User
  {
    return this.user;
  }
}
