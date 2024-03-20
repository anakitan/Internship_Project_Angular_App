import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Person } from 'src/app/models/person.model';
import { PostalAddress } from 'src/app/models/postalAddress.model';
import { ContactMethod } from 'src/app/models/contactMethod.model';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor(private http: HttpClient) { }

  getAuthHeaders(): HttpHeaders {
    const token = this.getAuthToken();
    if (token) {
      return new HttpHeaders({
        'Authorization': `Bearer ${token}`
      });
    }
    return new HttpHeaders();
  }

  private getAuthToken(): string | null {
    return localStorage.getItem('authToken');
  }

  listAllPersons(): Observable<Person[]> {
    const headers = this.getAuthHeaders();
    return this.http.get<Person[]>('/api/persons/listAll', { headers });
  }

  getPersonById(personId: number): Observable<Person> {
    const headers = this.getAuthHeaders();
    return this.http.get<Person>(`http://localhost:8080/api/persons/${personId}`, { headers });
  }

  addPostalAddress(personId: number, newAddress: PostalAddress): Observable<any> {
    const headers = this.getAuthHeaders();
    return this.http.put<any>(`http://localhost:8080/api/persons/${personId}/addAddress`, newAddress, { headers });
  }

  addContactMethod(personId: number, newContactMethod: ContactMethod): Observable<any> {
    const headers = this.getAuthHeaders();
    return this.http.put<any>(`http://localhost:8080/api/persons/${personId}/addContact`, newContactMethod, { headers });
  }

  addPerson(newPerson: any): Observable<any> {
    const headers = this.getAuthHeaders();
    return this.http.post<any>(`http://localhost:8080/api/persons/create`, newPerson, {headers});
  }

  editPostalAddress(personId: number, newAddress: PostalAddress): Observable<any> {
    const headers = this.getAuthHeaders();
    return this.http.put<Person>(`http://localhost:8080/api/persons/${personId}/editAddress`, newAddress, { headers });
  }

  deletePostalAddress(personId: number, addressId: number): Observable<void> {
    const headers = this.getAuthHeaders();
    return this.http.delete<void>(`http://localhost:8080/api/persons/${personId}/deleteAddress/${addressId}`, { headers });
  }
}
