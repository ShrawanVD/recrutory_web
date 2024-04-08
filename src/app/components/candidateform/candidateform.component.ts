import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CandidateService } from '../../services/candidate.service';

import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-candidateform',
  templateUrl: './candidateform.component.html',
  styleUrl: './candidateform.component.css'
})
export class CandidateformComponent {

 

  isLinear = true; // Or false, depending on your requirement
  isScreenLarge!: Observable<boolean>;

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit() {
    this.isScreenLarge = this.breakpointObserver.observe([Breakpoints.Large, Breakpoints.XLarge])
      .pipe(
        map(result => result.matches),
        shareReplay()
      );
  }

  


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