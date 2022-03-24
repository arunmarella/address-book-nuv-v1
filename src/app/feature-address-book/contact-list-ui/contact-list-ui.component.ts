import { Component, Input, OnInit } from '@angular/core';
import { Contact } from '../model/contact';

@Component({
  selector: 'contact-list-ui',
  templateUrl: './contact-list-ui.component.html',
  styleUrls: ['./contact-list-ui.component.scss']
})
export class ContactListUiComponent implements OnInit {

  @Input()
  contacts: Contact[];

  selectedContact: Contact;
  constructor() { }

  ngOnInit(): void {
  }
  handleContactRowClick(event){
    const selectedContact = this.contacts.find(contact => contact.userId === event.currentTarget.dataset['userId'])
    this.selectedContact =  !!selectedContact ? selectedContact : {fname: 'Details of the selected user not found'};
  }
}
