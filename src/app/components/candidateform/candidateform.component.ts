import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CandidateService } from '../../services/candidate.service';

@Component({
  selector: 'app-candidateform',
  templateUrl: './candidateform.component.html',
  styleUrl: './candidateform.component.css'
})
export class CandidateformComponent {

  candidateForm: FormGroup;

  constructor(private _snackBar: MatSnackBar, private router: Router,private fb: FormBuilder,private candidate:CandidateService) {
    this.candidateForm = this.fb.group({
      firstname: [''],
      lastname: [''],
      email: [''],
      mobile: [''],
      currentLocation: [''],
      companyname: [''],
      role: [''],
      ctc: [''],
      languages: this.fb.array([]),
      proficiency: this.fb.array([]),
      ans1 : [''],
      ans2 : [''],
      ans3 : [''],
      ans4 : [''],
      ans5 : [''],
      ans6 : [''],
      ans7 : ['']
    });
  }

  onSubmit(){
    console.log(this.candidateForm.value)
    this.candidate.candidateForm(this.candidateForm.value).subscribe({
      next: (response) =>{
        this._snackBar.open('form successfully!', 'Close', {
          duration: 2000,
        });
      },
      error: (error) => { 
        console.log(error);
      }
    })
  }


}
