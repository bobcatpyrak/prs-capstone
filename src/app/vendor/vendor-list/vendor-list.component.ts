import { Component, OnInit } from '@angular/core';
import { Vendor } from '../vendor.class';
import { VendorService } from '../vendor.service';
import { SystemService } from 'src/app/core/system.service';

@Component({
  selector: 'app-vendor-list',
  templateUrl: './vendor-list.component.html',
  styleUrls: ['./vendor-list.component.css']
})
export class VendorListComponent implements OnInit {

  vendors: Vendor[] = [];
  sortCriteria: string = "id";
  ascSequence: boolean = true;

  constructor(
    private vendorsvc: VendorService,
    private syssvc: SystemService
  ) { }

  ngOnInit(): void 
  {
    this.syssvc.checkLogin();

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

  sortColumn(column: string): void
  {
    if(column == this.sortCriteria)
    {
      this.ascSequence = !this.ascSequence;
      return;
    }
    this.sortCriteria = column;
    this.ascSequence = true;
  }

}
