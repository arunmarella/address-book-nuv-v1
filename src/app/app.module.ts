import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FeatureAddressBookModule } from './feature-address-book/feature-address-book.module';
import { AddressBookLayoutComponent } from './address-book-layout/address-book-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    AddressBookLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FeatureAddressBookModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
