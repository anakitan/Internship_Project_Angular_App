import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { CaseListComponent } from './components/case-list/case-list.component';
import { CaseDetailsComponent } from './components/case-details/case-details.component';
import { AddressTabsComponent } from './components/address-tabs/address-tabs.component';
import { ContactMethodTabsComponent } from './components/contact-method-tabs/contact-method-tabs.component';

const routes: Routes = [

{
  path: '',
  component: CaseListComponent,
  children: [
    { path: ':id',
      component: CaseDetailsComponent
    }
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CasesRoutingModule { }
