import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactListContainerComponent } from './contact-list-container/contact-list-container.component';
import { ContactService } from './services/contact.service';
import { ContactListUiComponent } from './contact-list-ui/contact-list-ui.component';



@NgModule({
  declarations: [
    ContactListContainerComponent,
    ContactListUiComponent
  ],
  exports:[ContactListContainerComponent],
  imports: [
    CommonModule
  ],
  providers: [ContactService]
})
export class FeatureAddressBookModule { }
