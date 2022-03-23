import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FeatureAddressBookModule } from './feature-address-book/feature-address-book.module';

@NgModule({
  declarations: [
    AppComponent
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
