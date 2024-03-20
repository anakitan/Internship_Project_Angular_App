import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { AuthService } from 'src/app/core/auth/auth.service';
import { CaseFile } from 'src/app/models/caseFile.model';

@Injectable({
  providedIn: 'root'
})
export class CasesService {

  constructor(private http: HttpClient, private authService: AuthService) { }

  listAllCaseFiles(): Observable<CaseFile[]> {
    const headers = this.authService.getAuthHeaders();
    return this.http.get<CaseFile[]>('/api/caseFiles/listAll', { headers });
  }

  getCaseFileById(caseFileId: number): Observable<CaseFile> {
    const headers = this.authService.getAuthHeaders();
    return this.http.get<CaseFile>(`http://localhost:8080/api/caseFiles/${caseFileId}`, { headers });
  }

  addCaseFile(newCaseFile: any): Observable<any> {
    const headers = this.authService.getAuthHeaders();
    return this.http.post<any>(`http://localhost:8080/api/caseFiles/create`, newCaseFile, { headers });
  }
}
