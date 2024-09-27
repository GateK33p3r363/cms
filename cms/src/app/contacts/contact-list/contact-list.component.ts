import { Component } from '@angular/core';

export interface Contact {
  id: string;
  name: string;
  email: string;
  phone: string;
  imageUrl: string;
  group: string | null;
}

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent {
  contacts: Contact[] = [
    {
      id: "1",
      name: "R. Kent Jackson",
      email: "jacksonk@byui.edu",
      phone: "208-496-3771",
      imageUrl: "../../assets/images/jacksonk.jpg",
      group: null
    },
    {
      id: "2",
      name: "Rex Barzee",
      email: "barzeer@byui.edu",
      phone: "208-496-3768",
      imageUrl: "../../assets/images/barzeer.jpg",
      group: null
    }
  ];

  createNewContact() {
    // Logic for creating a new contact goes here
    console.log('Create new contact clicked');
  }
}
