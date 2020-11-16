import { Component, OnInit } from '@angular/core';
import { Menu } from './menu.class';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit 
{
  menus: Menu[] = [
    new Menu("Home", "/home"),
    new Menu("About", "/about"),
    new Menu("Users", "/users"),
    new Menu("Vendors", "/vendors"),
    new Menu("Products", "/products"),
    new Menu("Requests", "/requests")
  ];


  constructor() { }

  ngOnInit(): void 
  {

  }

}
