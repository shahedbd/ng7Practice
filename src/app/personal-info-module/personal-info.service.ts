import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment as env } from './../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class PersonalInfoService {

  url = `${env.api}PersonalInfo/`;
  constructor(private http: HttpClient) { }

  getPersonalInfo() {
    return this.http.get(this.url);
  }

  getPersonalInfoById(id) {
    return this.http.get(this.url + id);
  }

  createPersonalInfo(body): Observable<any> {
    return this.http.post(this.url, body);
  }

  updatePersonalInfo(body, id) {
    this.http.put(`${this.url}${id}`, body)
      .subscribe(res => console.log('Updated. ID: ' + id));
  }

  deletePersonalInfo(id) {
    return this.http.delete(this.url + id)
      .subscribe(res => console.log('Deleted. ID: ' + id));
  }
}
