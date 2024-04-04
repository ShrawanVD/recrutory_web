import { LiveAnnouncer } from '@angular/cdk/a11y';
import { ENTER, COMMA } from '@angular/cdk/keycodes';
import { Component, HostListener, OnInit, inject } from '@angular/core';
import { MatChipInputEvent, MatChipEditedEvent } from '@angular/material/chips';
import { CandidateService } from '../../services/candidate.service';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';


interface Fruit {
  language: string;
}


@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrl: './company.component.css'
})
export class CompanyComponent implements OnInit {

  name: string = '';
  contactno: string = '';
  companyName: string = '';
  email: string = '';
  language: string[] = [];
  additionalLanguage: string = '' ;
  location: string = '';
  compensationBand: string = '';
  workingMode: string = '';
  roleType: string = '';
  hiringTimeline: string = '';
  communicationChannel: string = '';
  employementType: string = '';
  appointmentDate: Date = new Date();
  appointmentTime: string ='';
  
  // button for visibility
  showChipList = false;


  // for input-grid to add new languages
  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  fruits: Fruit[] = [];
  announcer: any;

  constructor(public candidate: CandidateService, private _snackBar: MatSnackBar) { }


  ngOnInit(): void {
    // this.showChipList = false;
    // localStorage.clear();
    // this.fruits = [];
    // const savedFruits = localStorage.getItem('fruits');
    // if (savedFruits) {
    //   this.fruits = JSON.parse(savedFruits);
    // }
  }

  // toggleChipList() {
  //   this.showChipList = !this.showChipList
  //   this.saveFruits();
  //   const savedFruits = localStorage.getItem('fruits');
  //   if (savedFruits) {
  //     this.fruits = JSON.parse(savedFruits);
  //   }
  //   console.log(savedFruits);
  //   this.additionalLanguage = savedFruits;
  // }

  // add(event: MatChipInputEvent): void {
  //   const value = (event.value || '').trim();

  //   // Add the new fruit
  //   if (value) {
  //     this.fruits.push({ language: value });
  //     this.saveFruits();
  //   }

  //   // Clear the input value
  //   event.chipInput!.clear();
  // }

  // remove(fruit: Fruit): void {
  //   const index = this.fruits.indexOf(fruit);

  //   if (index >= 0) {
  //     this.fruits.splice(index, 1);

  //     this.announcer.announce(`Removed ${fruit}`);
  //     this.saveFruits();
  //   }
  // }

  // saveFruits(): void {
  //   localStorage.setItem('fruits', JSON.stringify(this.fruits));
  // }

  onSubmit() {
    const data = {
      name: this.name,
      contactno: this.contactno,
      companyName: this.companyName,
      email: this.email,
      language: this.language,
      additionalLanguage: this.additionalLanguage,
      location: this.location,
      compensationBand: this.compensationBand,
      workingMode: this.workingMode,
      roleType: this.roleType,
      hiringTimeline: this.hiringTimeline,
      communicationChannel: this.communicationChannel,
      employementType: this.employementType,
    }
    console.log(data);
    this.candidate.companyForm(data).subscribe({
      next: (val: any) => {
        this._snackBar.open('Form Submitted Successfully', 'Close', {
          duration: 3000,
        });
        window.location.reload();
      },
      error: (err: any) => {
        const config = new MatSnackBarConfig();
        config.duration = 1000;
        config.verticalPosition = 'top'; 
        config.panelClass = ['custom-snackbar']; 
        this._snackBar.open('Form Submitted Successfully', 'Close', config);
        setTimeout(() => {
          window.location.reload();
        }, 1000);
        // console.error(err);
      }
    })
  }



}


