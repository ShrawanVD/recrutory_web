import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CandidateService {

  constructor(private http:HttpClient) { }

  candidateForm(data: any){
    return this.http.post('https://backendrecrutory.onrender.com/candidate',data);
  }

  companyForm(data: any){
    return this.http.post('https://backendrecrutory.onrender.com/company',data);
  }
  // sendEmail(){

  // }

}
