import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from '../model/contact';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'contact-list-container',
  templateUrl: './contact-list-container.component.html',
  styleUrls: ['./contact-list-container.component.scss']
})
export class ContactListContainerComponent implements OnInit {
  contacts$: Observable<Contact[]>;
  constructor(private contactService: ContactService) { }

  ngOnInit(): void {
    this.contacts$ = this.contactService.getContacts();
  }

}
