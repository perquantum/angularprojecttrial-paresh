import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { CoffeeHeaderComponent } from './coffee-header/coffee-header.component';
import { CoffeeFooterComponent } from './coffee-footer/coffee-footer.component';
import { CoffeeBodyComponent } from './coffee-body/coffee-body.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    CoffeeHeaderComponent,
    CoffeeFooterComponent,
    CoffeeBodyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
