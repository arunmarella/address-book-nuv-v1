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
  constructor() { }

  ngOnInit(): void {
  }

}
