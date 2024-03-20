import { Component, Input, OnInit } from '@angular/core';
import { Person } from 'src/app/models/person.model';
import { ActivatedRoute, Router } from '@angular/router';
import { PeopleService } from '../../people.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PostalAddressModalComponent } from 'src/app/shared/components/postal-address-modal/postal-address-modal.component';
import { ContactMethodModalComponent } from 'src/app/shared/components/contact-method-modal/contact-method-modal.component';

@Component({
  selector: 'app-person-details',
  templateUrl: './person-details.component.html',
  styleUrls: ['./person-details.component.css']
})
export class PersonDetailsComponent implements OnInit{

  personId!: number;
  @Input() person: Person | undefined;
  active: number | null = null;

  constructor(
    private route: ActivatedRoute, 
    private peopleService: PeopleService,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params['id']; 
      if (typeof id === 'string') {
        this.personId = +id; 
        this.fetchPersonDetails();
      }
    });
  }

  fetchPersonDetails() {
    this.peopleService.getPersonById(this.personId).subscribe(
      (person: Person) => {
        this.person = person;
      },
      (error: any) => {
        console.error('Error fetching person details:', error);
      }
    );
  }

  openPostalAddressModal(personId: number) {
    const modalRef = this.modalService.open(PostalAddressModalComponent); // Open the modal
    modalRef.componentInstance.personId = personId; // Pass any necessary data to the modal
    modalRef.result.then((result) => {
      if (result === 'Close click') {
        console.log('Modal closed with Close click');
      } else {
        console.log('New postal address added:', result);
        // to update the person details after adding a postal address
        this.fetchPersonDetails();
      }
    }, (reason) => {
      console.log('Modal dismissed with reason:', reason);
    });
  }

  openContactMethodModal(personId: number) {
    const modalRef = this.modalService.open(ContactMethodModalComponent); 
    modalRef.componentInstance.personId = personId;
    modalRef.result.then((result) => {
      if (result === 'Close click') {
        console.log('Modal closed with Close click');
      } else {
        console.log('New contact method added:', result);
        this.fetchPersonDetails();
      }
    }, (reason) => {
      console.log('Modal dismissed with reason:', reason);
    });
  }
}