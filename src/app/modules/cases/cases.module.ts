import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CaseListComponent } from './components/case-list/case-list.component';
import { CaseDetailsComponent } from './components/case-details/case-details.component';
import { AddressTabsComponent } from './components/address-tabs/address-tabs.component';
import { ContactMethodTabsComponent } from './components/contact-method-tabs/contact-method-tabs.component';
import { CasesRoutingModule } from './cases-routing.module';


@NgModule({
  declarations: [
    CaseListComponent,
    CaseDetailsComponent,
    AddressTabsComponent,
    ContactMethodTabsComponent,
  ],
  imports: [
    CommonModule,
    CasesRoutingModule
  ],
  exports: [CaseListComponent, CaseDetailsComponent]
})
export class CasesModule { }
