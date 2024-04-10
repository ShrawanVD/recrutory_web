import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CandidateformComponent } from './components/candidateform/candidateform.component';
import { HeaderComponent } from './components/header/header.component';
import { OverlayComponent } from './components/overlay/overlay.component';
import { CompanyComponent } from './components/company/company.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { SingleBlogComponent } from './components/single-blog/single-blog.component';

const routes: Routes = [
  {
    path: '',
    component: HeaderComponent
  },
  {
    path: 'candidate',
    component: CandidateformComponent
  },
  {
    path: 'overlay',
    component: OverlayComponent
  },
  {
    path: 'company',
    component: CompanyComponent
  },
  {
    path: 'blogs',
    component: BlogsComponent
  },
  {
    path: 'blogs/:id',
    component: SingleBlogComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
