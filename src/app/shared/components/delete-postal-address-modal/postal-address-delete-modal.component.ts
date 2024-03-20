import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { PeopleService } from 'src/app/modules/people/people.service';

@Component({
  selector: 'app-postal-address-delete-modal',
  standalone: true,
  templateUrl: './postal-address-delete-modal.component.html',
  styleUrls: ['./postal-address-delete-modal.component.css'],
  imports: [FormsModule],
})
export class PostalAddressDeleteModalComponent {

  @Input() personId!: number;
  @Input() addressId!: number;

  constructor(
    public activeModal: NgbActiveModal, 
    private peopleService: PeopleService
  ) {}

  deletePostalAddress() {
    this.peopleService.deletePostalAddress(Number(this.personId), Number(this.addressId)).subscribe(
      () => {
        console.log('Postal address deleted successfully.');
        this.activeModal.close('Postal address deleted succesfully');
      },
      (error) => {
        console.error('Error deleting postal address:', error);
        this.activeModal.dismiss('Error deleting postal address');
      }
    );
  }
}
