import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { PostalAddress } from 'src/app/models/postalAddress.model';
import { PeopleService } from 'src/app/modules/people/people.service';

@Component({
  selector: 'app-postal-address-modal',
  standalone: true,
  templateUrl: './postal-address-modal.component.html',
  styleUrls: ['./postal-address-modal.component.css'],
  imports: [FormsModule],
})
export class PostalAddressModalComponent {
  @Input() postalAddress: PostalAddress = {};
  personId!: number;
  @Input() isEdit: boolean = false;

  constructor(
    public activeModal: NgbActiveModal,
    public peopleService: PeopleService
  ) {}

  addPostalAddress(isEdit: boolean) {
    if (this.isEdit) {
      this.peopleService
        .editPostalAddress(this.personId, this.postalAddress)
        .subscribe({
          next: (address) => {
            console.log('Postal address edited successfully');
            this.activeModal.close(address);
          },
          error: (error) => {
            console.error('Error editing postal address:', error);
            this.activeModal.dismiss('Error editing postal address');
          },
        });
    } else {
      this.peopleService
        .addPostalAddress(Number(this.personId), this.postalAddress)
        .subscribe(
          () => {
            console.log('Postal address added successfully');
            this.activeModal.close('Postal address added successfully');
          },
          (error) => {
            console.error('Error adding postal address:', error);
            this.activeModal.dismiss('Error adding postal address');
          }
        );
    }

    // const newAddress: PostalAddress = {
    //   streetAddress: this.streetAddress,
    //   city: this.city,
    //   zip: this.zip,
    //   country: this.country
    // };

    // this.peopleService.addPostalAddress(this.personId, newAddress).subscribe(
    //   (response) => {
    //     console.log('Postal address added successfully:', response);
    //     this.activeModal.close('Postal address added successfully');
    //   },
    //   (error) => {
    //     console.error('Error adding postal address:', error);
    //     this.activeModal.dismiss('Error adding postal address');
    //   }
    // );
  }
}
