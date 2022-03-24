import { Component, Input, OnInit } from '@angular/core';
import { Contact } from '../model/contact';

@Component({
  selector: 'contact-detail-ui',
  templateUrl: './contact-detail-ui.component.html',
  styleUrls: ['./contact-detail-ui.component.scss']
})
export class ContactDetailUiComponent implements OnInit {
  @Input()
  selectedContact: Contact;
  constructor() { }

  ngOnInit(): void {
  }

}
