import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './core/home/home.component';
import { AboutComponent } from './core/about/about.component';
import { E404Component } from './core/e404/e404.component';
import { MenuComponent } from './menu/menu.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { VendorListComponent } from './vendor/vendor-list/vendor-list.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { RequestListComponent } from './request/request-list/request-list.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { VendorDetailComponent } from './vendor/vendor-detail/vendor-detail.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { RequestDetailComponent } from './request/request-detail/request-detail.component';
import { UserCreateComponent } from './user/user-create/user-create.component';
import { VendorCreateComponent } from './vendor/vendor-create/vendor-create.component';
import { ProductCreateComponent } from './product/product-create/product-create.component';
import { RequestCreateComponent } from './request/request-create/request-create.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import { VendorEditComponent } from './vendor/vendor-edit/vendor-edit.component';
import { ProductEditComponent } from './product/product-edit/product-edit.component';
import { RequestEditComponent } from './request/request-edit/request-edit.component';
import { SortPipe } from './core/sort.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    E404Component,
    MenuComponent,
    UserListComponent,
    VendorListComponent,
    ProductListComponent,
    RequestListComponent,
    UserDetailComponent,
    VendorDetailComponent,
    ProductDetailComponent,
    RequestDetailComponent,
    UserCreateComponent,
    VendorCreateComponent,
    ProductCreateComponent,
    RequestCreateComponent,
    UserEditComponent,
    VendorEditComponent,
    ProductEditComponent,
    RequestEditComponent,
    SortPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
