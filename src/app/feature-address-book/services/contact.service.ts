import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { map, Observable, of } from 'rxjs';
import { Contact } from '../model/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  public static RANDOM_USER_API_BASE_URL = 'https://randomuser.me/api/'
  constructor(private httpClient: HttpClient) { }
  public getContacts(): Observable<Contact[]>{
    return this.httpClient.get(ContactService.RANDOM_USER_API_BASE_URL, {params: {results: 100, nat: 'us'}}).pipe(map(response =>{
      const resultsAsArray:[] = response['results'];
      return resultsAsArray.map(userData =>{
        return {
          fname: userData['name']['first'],
          lname: userData['name']['last'],
          email: userData['email'],
          phone: userData['phone'],
          address: userData['location'],
          picture: userData['picture']['thumbnail'],
          dob:userData['dob']['date'],
          userId: userData['login']['username']
        }
      })
    }));
    
  }
}
