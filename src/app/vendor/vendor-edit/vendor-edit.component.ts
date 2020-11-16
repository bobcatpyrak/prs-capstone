import { Component, OnInit } from '@angular/core';
import { VendorService } from '../vendor.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Vendor } from '../vendor.class';


@Component({
  selector: 'app-vendor-edit',
  templateUrl: './vendor-edit.component.html',
  styleUrls: ['./vendor-edit.component.css']
})
export class VendorEditComponent implements OnInit 
{
  vendor: Vendor;
  btnsav: string = "btn btn-primary";
  btndel: string = "btn btn-danger";
  saveMsg: string = "Save";

  constructor(
    private vendorsvc: VendorService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void 
  {
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

  saveChanges(): void
  {
    this.vendorsvc.edit(this.vendor).subscribe(
      res => {
        console.debug("Saved!");
        this.router.navigateByUrl("/vendors");
        this.btnsav = "btn btn-success";
        this.saveMsg = "Saved!";
      },
      err => {
        this.btnsav = "btn btn-danger";
        this.saveMsg = "Failed!";
        console.error("Could not save changes: ", err);
      }
    );
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
