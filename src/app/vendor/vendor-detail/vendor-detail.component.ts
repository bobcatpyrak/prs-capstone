import { Component, OnInit } from '@angular/core';
import { VendorService } from '../vendor.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Vendor } from '../vendor.class';
import { SystemService } from 'src/app/core/system.service';


@Component({
  selector: 'app-vendor-detail',
  templateUrl: './vendor-detail.component.html',
  styleUrls: ['./vendor-detail.component.css']
})
export class VendorDetailComponent implements OnInit 
{
  vendor: Vendor;
  btnsav: string = "btn btn-primary";
  btndel: string = "btn btn-danger";
  saveMsg: string = "Save";

  constructor(
    private vendorsvc: VendorService,
    private route: ActivatedRoute,
    private syssvc: SystemService,
    private router: Router
  ) { }

  ngOnInit(): void 
  {
    this.syssvc.checkLogin();

    let id = this.route.snapshot.params.id;

    this.vendorsvc.get(id).subscribe(
      res => {
        console.debug("Vendor: ", res);
        this.vendor = res;
      },
      err => {
        console.error(err);
      }
    )
  }
  newChanges(): void
  {
    this.btnsav = "btn btn-primary";
    this.saveMsg = "Save";
  }

  deleteVendor(): void
  {
    this.vendorsvc.delete(this.vendor).subscribe(
      res => {
        console.debug("Vendor deleted!");
        this.router.navigateByUrl("/vendors");
      },
      err => {
        console.error("Could not delete vendor: ", err);
      }
    );
  }

}
