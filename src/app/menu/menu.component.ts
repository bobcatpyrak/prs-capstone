import { Component, OnInit } from '@angular/core';
import { Menu } from './menu.class';
import { SystemService } from '../core/system.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit 
{
  menus: Menu[] = [];


  constructor(
    private syssvc: SystemService
  ) { }

  ngOnInit(): void 
  {
    if(this.syssvc.user != null)
    {
      this.menus.push(new Menu("Home", "/home"));
      this.menus.push(new Menu("About", "/about"));
      this.menus.push(new Menu("Users", "/users"));
      this.menus.push(new Menu("Vendors", "/vendors"));
      this.menus.push(new Menu("Products", "/products"));
      this.menus.push(new Menu("Requests", "/requests"));
    }
    if(this.syssvc.isReviewer())
    {
      this.menus.push(new Menu("Review", "/requests/review"));
    }
    if(this.syssvc.user != null)
      this.menus.push(new Menu("Logout", "/login"));

  }

}
