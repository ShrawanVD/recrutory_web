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
    NgbModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
