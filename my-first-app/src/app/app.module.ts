import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { CoffeeHeaderComponent } from './coffee-header/coffee-header.component';
import { CoffeeFooterComponent } from './coffee-footer/coffee-footer.component';
import { CoffeeBodyComponent } from './coffee-body/coffee-body.component';
import { ProductComponent } from './product/product.component';
import { ProductDescriptionComponent } from './product-description/product-description.component';
import { DateTimeService } from './date-time.service'
import { UserInfoService } from './user-info.service'
import { CounterService } from './counter.service';
import { ReactiveFormModuleComponent } from './reactive-form-module/reactive-form-module.component';
import { ReactiveAddressFormComponent } from './reactive-address-form/reactive-address-form.component'
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    CoffeeHeaderComponent,
    CoffeeFooterComponent,
    CoffeeBodyComponent,
    ProductComponent,
    ProductDescriptionComponent,
    ReactiveFormModuleComponent,
    ReactiveAddressFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [DateTimeService, UserInfoService, CounterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
