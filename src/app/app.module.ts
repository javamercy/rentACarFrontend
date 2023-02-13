import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { CarComponent } from "./components/car/car.component";
import { ColorComponent } from "./components/color/color.component";
import { BrandComponent } from "./components/brand/brand.component";

import { HttpClientModule } from "@angular/common/http";
import { CustomerComponent } from "./components/customer/customer.component";
import { CarDetailComponent } from "./components/car-detail/car-detail.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FilterComponent } from "./components/filter/filter.component";
import { FilterBrandColorComponent } from "./components/filter-brand-color/filter-brand-color.component";
import { FilterColorPipe } from "./pipes/filter-color.pipe";
import { FilterBrandPipe } from "./pipes/filter-brand.pipe";
import { PaymentComponent } from "./components/payment/payment.component";

import { CarAddComponent } from "./components/car-add/car-add.component";
import { AuthComponent } from "./components/auth/auth.component";
import { LoginComponent } from "./components/auth/login/login.component";
import { SingupComponent } from "./components/auth/singup/singup.component";
import { HomeComponent } from "./components/home/home.component";
import { FooterComponent } from "./components/footer/footer.component";
import { ToastrModule } from "ngx-toastr";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CarComponent,
    ColorComponent,
    BrandComponent,
    CustomerComponent,
    CarDetailComponent,
    FilterComponent,
    FilterBrandColorComponent,
    FilterColorPipe,
    FilterBrandPipe,
    PaymentComponent,
    CarAddComponent,
    AuthComponent,
    LoginComponent,
    SingupComponent,
    HomeComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
