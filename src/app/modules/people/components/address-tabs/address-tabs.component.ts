import { Component, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PostalAddress } from 'src/app/models/postalAddress.model';
import { PostalAddressModalComponent } from 'src/app/shared/components/postal-address-modal/postal-address-modal.component';
import { PostalAddressDeleteModalComponent } from 'src/app/shared/components/delete-postal-address-modal/postal-address-delete-modal.component';
import { PeopleService } from '../../people.service';
import { Person } from 'src/app/models/person.model';

@Component({
  selector: 'app-address-tabs',
  templateUrl: './address-tabs.component.html',
  styleUrls: ['./address-tabs.component.css'],
})
export class AddressTabsComponent {
  @Input() postalAddresses: PostalAddress[] = [];
  @Input() address!: PostalAddress;
  @Input() personId!: number;
  addressId!: number;
  editedAddress!: PostalAddress;

  hasPostalAddresses(): boolean {
    return !!this.postalAddresses && this.postalAddresses.length > 0;
  }

  constructor(
    private modalService: NgbModal,
    private peopleService: PeopleService
  ) {}

  openEditPostalAddressModal(isEdit: boolean, postalAddress?: PostalAddress) {
    const modalRef = this.modalService.open(PostalAddressModalComponent);
    modalRef.componentInstance.isEdit = isEdit;
    // modalRef.componentInstance.postalAddress = {...postalAddress};
    modalRef.componentInstance.postalAddress  = JSON.parse(JSON.stringify(postalAddress));
    modalRef.componentInstance.personId = this.personId;
    modalRef.componentInstance.modalTitle = isEdit ? 'Edit address' : 'Add new address';
    modalRef.result.then(
      (address: PostalAddress) => {
        if (isEdit) {
          if (!address.id) {
            console.error('Invalid postal address or address ID.');
          } else {
            const index = this.postalAddresses?.findIndex(addr => addr.id === address?.id);
            if (index !== -1) {
              this.postalAddresses[index] = address;
            }
          }
        } else {
          this.postalAddresses.push(address);
        }
      },
      () => {
        console.log('on modal dismiss');
      }
    );
  }

  fetchPostalAddresses() {
    this.peopleService.getPersonById(this.personId).subscribe(
      (person: Person) => {
        if (person.postalAddresses) { 
          this.postalAddresses = person.postalAddresses; 
        } else {
          console.error('Postal addresses are undefined in the response.');
        }
      },
      (error: any) => {
        console.error('Error fetching postal addresses:', error);
      }
    );
  }

  openDeletePostalAddressModal(addressId: number) {
    const modalRef = this.modalService.open(PostalAddressDeleteModalComponent);
    modalRef.componentInstance.personId = this.personId;
    modalRef.componentInstance.addressId = addressId;
    modalRef.result.then(
      (result) => {
        console.log('Postal address deleted:', result);
        //Implement logic to refresh postal addresses
        this.fetchPostalAddresses();
      },
      (reason) => {
        console.log('Modal dismissed with reason:', reason);
      }
    );
  }
}
