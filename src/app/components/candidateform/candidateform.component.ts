import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CandidateService } from '../../services/candidate.service';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';



@Component({
  selector: 'app-candidateform',
  templateUrl: './candidateform.component.html',
  styleUrl: './candidateform.component.css'
})
export class CandidateformComponent {


  isSmallScreen: boolean = false;

  constructor(private breakpointObserver: BreakpointObserver, private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.breakpointObserver.observe([Breakpoints.Small, Breakpoints.XSmall])
      .subscribe(result => {
        this.isSmallScreen = result.matches;
      });
  }



  // toggling horizontal to vertical stepper
  // isVertical: boolean = false;







  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  isLinear = false;


  

  


}












  // onSubmit(){
  //   console.log(this.candidateForm.value)
  //   this.candidate.candidateForm(this.candidateForm.value).subscribe({
  //     next: (response) =>{
  //       this._snackBar.open('form successfully!', 'Close', {
  //         duration: 2000,
  //       });
  //     },
  //     error: (error) => { 
  //       console.log(error);
  //     }
  //   })
  // }