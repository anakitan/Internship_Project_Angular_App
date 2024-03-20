import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { PeopleService } from 'src/app/modules/people/people.service';

@Component({
  selector: 'app-people-modal',
  standalone: true,
  templateUrl: './people-modal.component.html',
  styleUrls: ['./people-modal.component.css'],
  imports: [FormsModule]
})
export class PeopleModalComponent {

  givenName: string = '';
  lastName: string = '';
  dateOfBirth: string = '';
  placeOfBirth: string = '';

  constructor(
    public activeModal: NgbActiveModal,
    public peopleService: PeopleService
  ) {}

  addPerson() {
    const newPerson = {
      givenName: this.givenName,
      lastName: this.lastName,
      dateOfBirth: this.dateOfBirth,
      placeOfBirth: this.placeOfBirth,
    };

    this.peopleService.addPerson(newPerson).subscribe(
      (response) => {
        console.log('New person added successfully:', response);
        this.activeModal.close('Person added successfully');
      },
      (error) => {
        console.log('Error adding person:', error);
        this.activeModal.dismiss('Error adding person');
      }
    );
  }
}
