import { Component, OnInit } from '@angular/core';
import { Vendor } from '../vendor.class';
import { VendorService } from '../vendor.service';

@Component({
  selector: 'app-vendor-list',
  templateUrl: './vendor-list.component.html',
  styleUrls: ['./vendor-list.component.css']
})
export class VendorListComponent implements OnInit {

  vendors: Vendor[] = [];

  constructor(
    private vendorsvc: VendorService
  ) { }

  ngOnInit(): void 
  {
    this.vendorsvc.list().subscribe(
      res => 
      {
        console.log(res);
        this.vendors = res as Vendor[];
      },
      err =>
      {
        console.error(err);
      }
    )
  }

}
