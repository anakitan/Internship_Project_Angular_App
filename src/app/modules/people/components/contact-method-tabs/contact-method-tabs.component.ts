import { Component, Input } from '@angular/core';
import { ContactMethod } from 'src/app/models/contactMethod.model';

@Component({
  selector: 'app-contact-method-tabs',
  templateUrl: './contact-method-tabs.component.html',
  styleUrls: ['./contact-method-tabs.component.css']
})
export class ContactMethodTabsComponent {

  @Input() contactMethods: ContactMethod[] | undefined;

  hasContactMethods(): boolean {
    return !!this.contactMethods && this.contactMethods.length > 0;
  }

}
