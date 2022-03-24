import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactListContainerComponent } from './contact-list-container/contact-list-container.component';
import { ContactService } from './services/contact.service';
import { ContactListUiComponent } from './contact-list-ui/contact-list-ui.component';
import { HttpClientModule } from '@angular/common/http';
import { ContactDetailUiComponent } from './contact-detail-ui/contact-detail-ui.component';



@NgModule({
  declarations: [
    ContactListContainerComponent,
    ContactListUiComponent,
    ContactDetailUiComponent
  ],
  exports:[ContactListContainerComponent],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [ContactService]
})
export class FeatureAddressBookModule { }
