import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from "./core/home/home.component";
import { AboutComponent } from "./core/about/about.component";
import { E404Component } from "./core/e404/e404.component";
import { UserListComponent } from "./user/user-list/user-list.component";
import { UserDetailComponent } from "./user/user-detail/user-detail.component";
import { UserEditComponent } from "./user/user-edit/user-edit.component";
import { UserCreateComponent } from "./user/user-create/user-create.component";
import { UserLoginComponent } from "./user/user-login/user-login.component";
import { VendorListComponent } from "./vendor/vendor-list/vendor-list.component";
import { VendorEditComponent } from "./vendor/vendor-edit/vendor-edit.component";
import { VendorCreateComponent } from "./vendor/vendor-create/vendor-create.component";
import { VendorDetailComponent } from "./vendor/vendor-detail/vendor-detail.component";
import { ProductListComponent } from "./product/product-list/product-list.component";
import { ProductEditComponent } from "./product/product-edit/product-edit.component";
import { ProductCreateComponent } from "./product/product-create/product-create.component";
import { ProductDetailComponent } from "./product/product-detail/product-detail.component";
import { RequestListComponent } from "./request/request-list/request-list.component";
import { RequestEditComponent } from "./request/request-edit/request-edit.component";
import { RequestCreateComponent } from "./request/request-create/request-create.component";
import { RequestDetailComponent } from "./request/request-detail/request-detail.component";
import { RequestLineComponent } from './requestline/requestline.component';
import { RequestLineCreateComponent } from './requestline/requestline-create/requestline-create.component';
import { RequestLineEditComponent } from './requestline/requestline-edit/requestline-edit.component';

const routes: Routes = [
  { path: "", redirectTo: "/login", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "about", component: AboutComponent },
  { path: "login", component: UserLoginComponent },
  { path: "users", component: UserListComponent },
  { path: "users/detail/:id", component: UserDetailComponent },
  { path: "users/edit/:id", component: UserEditComponent },
  { path: "users/create", component: UserCreateComponent },
  { path: "vendors", component: VendorListComponent },
  { path: "vendors/detail/:id", component: VendorDetailComponent },
  { path: "vendors/edit/:id", component: VendorEditComponent },
  { path: "vendors/create", component: VendorCreateComponent },
  { path: "products", component: ProductListComponent },
  { path: "products/detail/:id", component: ProductDetailComponent },
  { path: "products/edit/:id", component: ProductEditComponent },
  { path: "products/create", component: ProductCreateComponent },
  { path: "requests", component: RequestListComponent },
  { path: "requests/detail/:id", component: RequestDetailComponent },
  { path: "requests/edit/:id", component: RequestEditComponent },
  { path: "requests/create", component: RequestCreateComponent },
  { path: "requests/lines/:id", component: RequestLineComponent },
  { path: "requests/lines/create/:id", component: RequestLineCreateComponent },
  { path: "requests/lines/edit/:id", component: RequestLineEditComponent },
  { path: "**", component: E404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
