import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ProjectPostComponent } from './project-post/project-post.component'
import { ContactComponent } from './contact/contact.component'
import { SfNewsComponent } from './sf-news/sf-news.component'

const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'project', component: ProjectPostComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'news', component: SfNewsComponent },
  { path: '', redirectTo: 'project', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
