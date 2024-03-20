import { Component } from '@angular/core';
import { CaseFile } from 'src/app/models/caseFile.model';
import { CasesService } from '../../cases.service';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CasesModalComponent } from 'src/app/shared/components/cases-modal/cases-modal.component';

@Component({
  selector: 'app-case-list',
  templateUrl: './case-list.component.html',
  styleUrls: ['./case-list.component.css']
})
export class CaseListComponent {

  caseFiles: CaseFile[]  = [];
  selectedCaseFile: CaseFile | undefined;

  clickedItem: any; 

  handleClick(item: any) {
    this.clickedItem = item;
  }

  constructor(
    private casesService: CasesService, 
    private router: Router,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.fetchCaseFiles();
  }

  fetchCaseFiles() {
    this.casesService.listAllCaseFiles().subscribe(
      (caseFiles: CaseFile[]) => {
        this.caseFiles = caseFiles;
      },
      (error: any) => {
        console.error('Error fetching case files:', error);
      }
    );
  }

  showDetails(caseFileId: number | undefined) {
    if (caseFileId !== undefined) {
      this.router.navigate(['/cases', caseFileId]);
    } else {
      this.selectedCaseFile = undefined;
    }
    console.log('Selected Case File:', this.selectedCaseFile);
  }

  openCaseFileModal() {
    const modalRef = this.modalService.open(CasesModalComponent); 
    modalRef.result.then((result) => {
      if (result === 'Close click') {
        console.log('Modal closed with Close click');
      } else {
        console.log('New case file added:', result);
        this.fetchCaseFiles();
      }
    }, (reason) => {
      console.log('Modal dismissed with reason:', reason);
    });
  }
}
