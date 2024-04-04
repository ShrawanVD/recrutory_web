import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CandidateformComponent } from './components/candidateform/candidateform.component';
import { OverlayComponent } from './components/overlay/overlay.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { CompanyComponent } from './components/company/company.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HttpClientModule } from '@angular/common/http';

import {FormBuilder, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatStepperModule} from '@angular/material/stepper';
import {MatButtonModule} from '@angular/material/button';
import {MatChipsModule} from '@angular/material/chips';

import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {Component, inject} from '@angular/core';
import {MatChipEditedEvent, MatChipInputEvent} from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon';
import {NgFor} from '@angular/common';
import {LiveAnnouncer} from '@angular/cdk/a11y';

import {MatSelectModule} from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';
import {NgIf} from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CandidateformComponent,
    OverlayComponent,
    CompanyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    MatDialogModule,
    MatIconModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatButtonModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatChipsModule,
    MatCardModule,
    NgFor, 
    MatIconModule,
    MatSelectModule,
    MatDialogModule,
    NgIf,
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
