import { Component, Input, OnInit } from '@angular/core';
import { CaseFile } from 'src/app/models/caseFile.model';
import { ActivatedRoute } from '@angular/router';
import { CasesService } from '../../cases.service';

@Component({
  selector: 'app-case-details',
  templateUrl: './case-details.component.html',
  styleUrls: ['./case-details.component.css']
})
export class CaseDetailsComponent implements OnInit {

  caseFileId!: number;
  @Input() caseFile: CaseFile | undefined;

  constructor(private route: ActivatedRoute, private casesService: CasesService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params['id']; 
      if (typeof id === 'string') {
        this.caseFileId = +id;
        this.fetchCaseFileDetails();
      }
    });
  }

  fetchCaseFileDetails() {
    this.casesService.getCaseFileById(this.caseFileId).subscribe(
      (caseFile: CaseFile) => {
        this.caseFile = caseFile;
      },
      (error: any) => {
        console.error('Error fetching case file details:', error);
      }
    );
  }
}
