import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ContactMethod } from 'src/app/models/contactMethod.model';
import { ContactType } from 'src/app/models/contactType.model';
import { PeopleService } from 'src/app/modules/people/people.service';

@Component({
  selector: 'app-contact-method-modal',
  standalone: true,
  templateUrl: './contact-method-modal.component.html',
  styleUrls: ['./contact-method-modal.component.css'],
  imports: [FormsModule]
})
export class ContactMethodModalComponent {

  @Input() contactMethod: any;
  type: ContactType[] = [];
  value: string = '';
  description: string = '';
  personId!: number;
  selectedType: ContactType[] = [];

  constructor(
    public activeModal: NgbActiveModal,
    public peopleService: PeopleService
  ) {}

  addContactMethod() {

    const newContactMethod: ContactMethod = {
      type: this.selectedType,
      value: this.value,
      description: this.description
    };

    this.peopleService.addContactMethod(this.personId, newContactMethod).subscribe(
      (response) => {
        console.log('Contact method added succesfully:', response);
        this.activeModal.close('Contact method added successfully');
      },
      (error) => {
        console.error('Error adding contact method:', error);
        this.activeModal.dismiss('Error adding contact method');
      }
    );
  }
}
