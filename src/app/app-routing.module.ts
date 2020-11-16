import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from "./core/home/home.component";
import { AboutComponent } from "./core/about/about.component";
import { E404Component } from "./core/e404/e404.component";
import { UserListComponent } from "./user/user-list/user-list.component";
import { UserDetailComponent } from "./user/user-detail/user-detail.component";
import { UserCreateComponent } from "./user/user-create/user-create.component";
import { VendorListComponent } from "./vendor/vendor-list/vendor-list.component";
import { VendorDetailComponent } from "./vendor/vendor-detail/vendor-detail.component";
import { VendorCreateComponent } from "./vendor/vendor-create/vendor-create.component";
import { ProductListComponent } from "./product/product-list/product-list.component";
import { ProductDetailComponent } from "./product/product-detail/product-detail.component";
import { ProductCreateComponent } from "./product/product-create/product-create.component";
import { RequestListComponent } from "./request/request-list/request-list.component";
import { RequestDetailComponent } from "./request/request-detail/request-detail.component";
import { RequestCreateComponent } from "./request/request-create/request-create.component";

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "about", component: AboutComponent },
  { path: "users", component: UserListComponent },
  { path: "users/detail/:id", component: UserDetailComponent },
  { path: "users/create", component: UserCreateComponent },
  { path: "vendors", component: VendorListComponent },
  { path: "vendors/detail/:id", component: VendorDetailComponent },
  { path: "vendors/create", component: VendorCreateComponent },
  { path: "products", component: ProductListComponent },
  { path: "products/detail/:id", component: ProductDetailComponent },
  { path: "products/create", component: ProductCreateComponent },
  { path: "requests", component: RequestListComponent },
  { path: "requests/detail/:id", component: RequestDetailComponent },
  { path: "requests/create", component: RequestCreateComponent },
  { path: "**", component: E404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
