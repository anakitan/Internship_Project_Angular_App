import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CasesService } from 'src/app/modules/cases/cases.service';

@Component({
  selector: 'app-cases-modal',
  standalone: true,
  templateUrl: './cases-modal.component.html',
  styleUrls: ['./cases-modal.component.css'],
  imports: [FormsModule]
})
export class CasesModalComponent {

  caseNumber: number | undefined;
  title: string = '';
  incidentDate: string = '';

  constructor(
    public activeModal: NgbActiveModal,
    public casesService: CasesService
  ) {}

  addCaseFile() {
    const newCaseFile = {
      caseNumber: this.caseNumber,
      title: this.title,
      incidentDate: this.incidentDate,
    };

    this.casesService.addCaseFile(newCaseFile).subscribe(
      (response) => {
        console.log('New case file added successfully:', response);
        this.activeModal.close('Case file added successfully');
      },
      (error) => {
        console.log('Error adding case file:', error);
        this.activeModal.dismiss('Error adding case file');
      }
    );
  }
}
