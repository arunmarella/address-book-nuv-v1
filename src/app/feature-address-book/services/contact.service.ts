import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Contact } from '../model/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor() { }
  public getContacts(): Observable<Contact[]>{
    return of([{fname: "Jane", lname: "Smith"},
    {fname: "John", lname: "Smith"},
    {fname: "Some", lname: "Name"}])
  }
}
