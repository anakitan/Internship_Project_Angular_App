import { PeopleService } from './../../people.service';
import { Component } from '@angular/core';
import { Person } from 'src/app/models/person.model';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PeopleModalComponent } from 'src/app/shared/components/people-modal/people-modal.component';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent {

  persons: Person[] = [];
  selectedPerson: Person | undefined;

  clickedItem: any; 

  handleClick(item: any) {
    this.clickedItem = item;
  }

  constructor(
    private peopleService: PeopleService, 
    private router: Router,
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
    this.fetchPeople();
  }

  fetchPeople() {
    this.peopleService.listAllPersons().subscribe(
      (persons: Person[]) => {
        this.persons = persons;
      },
      (error: any) => {
        console.error('Error fetching people:', error);
      }
    );
  }

  showDetails(personId: number | undefined) {
    if (personId !== undefined) {
      //this.selectedPerson = this.persons.find(person => person.id === personId);
      this.router.navigate(['/people', personId]);
    } else {
      this.selectedPerson = undefined;
    }
    console.log('Selected Person:', this.selectedPerson);
  }

  openPeopleModal() {
    const modalRef = this.modalService.open(PeopleModalComponent); // Open the modal
    modalRef.result.then((result) => {
      if (result === 'Close click') {
        console.log('Modal closed with Close click');
      } else {
        console.log('New postal address added:', result);
        // to update the person details after adding a postal address
        this.fetchPeople();
      }
    }, (reason) => {
      console.log('Modal dismissed with reason:', reason);
    });
  }
}
