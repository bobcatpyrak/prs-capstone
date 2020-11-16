import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from "./core/home/home.component";
import { AboutComponent } from "./core/about/about.component";
import { E404Component } from "./core/e404/e404.component";
import { UserListComponent } from "./user/user-list/user-list.component";
import { UserDetailComponent } from "./user/user-detail/user-detail.component";
import { VendorListComponent } from "./vendor/vendor-list/vendor-list.component";
import { VendorDetailComponent } from "./vendor/vendor-detail/vendor-detail.component";
import { ProductListComponent } from "./product/product-list/product-list.component";
import { RequestListComponent } from "./request/request-list/request-list.component";

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "about", component: AboutComponent },
  { path: "users", component: UserListComponent },
  { path: "users/detail/:id", component: UserDetailComponent },
  { path: "vendors", component: VendorListComponent },
  { path: "vendors/detail/:id", component: VendorDetailComponent },
  { path: "products", component: ProductListComponent },
  { path: "requests", component: RequestListComponent },
  { path: "**", component: E404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
