import { LiveAnnouncer } from '@angular/cdk/a11y';
import { ENTER, COMMA } from '@angular/cdk/keycodes';
import { Component, OnInit, inject } from '@angular/core';
import { MatChipInputEvent, MatChipEditedEvent } from '@angular/material/chips';


interface Fruit {
  name: string;
}


@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrl: './company.component.css'
})
export class CompanyComponent implements OnInit{

  
// button for visibility
showChipList = false;
toggleChipList() {
  this.showChipList = !this.showChipList;
}




// for input-grid to add new languages
  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  fruits: Fruit[] = [];
  announcer: any;

  ngOnInit(): void {
    console.log(this.fruits)
}
  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add the new fruit
    if (value) {
      this.fruits.push({ name: value });
    }

    // Clear the input value
    event.chipInput!.clear();
  }

  remove(fruit: Fruit): void {
    const index = this.fruits.indexOf(fruit);

    if (index >= 0) {
      this.fruits.splice(index, 1);

      this.announcer.announce(`Removed ${fruit}`);
    }
  }

  edit(fruit: Fruit, event: MatChipEditedEvent) {
    const value = event.value.trim();

    // Remove fruit if it no longer has a name
    if (!value) {
      this.remove(fruit);
      return;
    }

    // Edit existing fruit
    const index = this.fruits.indexOf(fruit);
    if (index >= 0) {
      this.fruits[index].name = value;
    }
  }




}


