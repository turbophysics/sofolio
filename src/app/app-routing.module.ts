import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ProjectPostComponent } from './project-post/project-post.component'
import { ContactComponent } from './contact/contact.component'
import { SfNewsComponent } from './sf-news/sf-news.component'
import { SfMainComponent } from './sf-main/sf-main.component'
import { SfNewPostComponent } from './sf-new-post/sf-new-post.component'

const routes: Routes = [
  { path: 'main', component: SfMainComponent },
  { path: 'about', component: AboutComponent },
  { path: 'project', component: ProjectPostComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'news', component: SfNewsComponent },
  { path: 'newpost', component: SfNewPostComponent},
  { path: '', redirectTo: 'main', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
