import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonListComponent } from './components/person-list/person-list.component';
import { PersonDetailsComponent } from './components/person-details/person-details.component';
import { AddressTabsComponent } from './components/address-tabs/address-tabs.component';
import { ContactMethodTabsComponent } from './components/contact-method-tabs/contact-method-tabs.component';
import { PeopleRoutingModule } from './people-routing.module';
import { NgbModule, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { PostalAddressModalComponent } from "../../shared/components/postal-address-modal/postal-address-modal.component";


@NgModule({
    declarations: [
        PersonListComponent,
        PersonDetailsComponent,
        AddressTabsComponent,
        ContactMethodTabsComponent
    ],
    exports: [PersonListComponent, PersonDetailsComponent],
    imports: [
        CommonModule,
        PeopleRoutingModule,
        NgbModule,
        NgbNavModule,
    ]
})
export class PeopleModule { }
