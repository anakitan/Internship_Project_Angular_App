import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonListComponent } from './components/person-list/person-list.component';
import { AddressTabsComponent } from './components/address-tabs/address-tabs.component';
import { ContactMethodTabsComponent } from './components/contact-method-tabs/contact-method-tabs.component';
import { PersonDetailsComponent } from './components/person-details/person-details.component';


const routes: Routes = [
  {
    path: '',
    component: PersonListComponent,
    children: [
      {
        path: ':id',
        component: PersonDetailsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PeopleRoutingModule { }
