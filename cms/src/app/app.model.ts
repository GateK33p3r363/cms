import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
//import { HeaderComponent } from './app/contacts/header.component';
//import { ContactComponents } from './app/contacts/contacts.component';
//import { ContactDetailComponent } from './app/contacts/contact-detail.component';
//import { ContactListComponent } from './app/contacts/contact-list.component';

@NgModule({
  declarations: [
    AppComponent,
    //HeaderComponent,
    //ContactComponents
    //ContactListComponent,
    //ContactDetailCompoent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }