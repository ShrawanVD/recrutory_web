import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CandidateformComponent } from './components/candidateform/candidateform.component';
import { HeaderComponent } from './components/header/header.component';
import { OverlayComponent } from './components/overlay/overlay.component';

const routes: Routes = [
  {
    path: '',
    component: HeaderComponent
  },
  {
    path: 'company',
    component: CandidateformComponent
  },
  {
    path: 'overlay',
    component: OverlayComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
