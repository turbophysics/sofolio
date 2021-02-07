import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectPostComponent } from './project-post/project-post.component';
import { ProjectWriteupComponent } from './project-writeup/project-writeup.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { SfNewsComponent } from './sf-news/sf-news.component';
import { SfMainComponent } from './sf-main/sf-main.component';
import { SfNewPostComponent } from './sf-new-post/sf-new-post.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectPostComponent,
    ProjectWriteupComponent,
    AboutComponent,
    ContactComponent,
    SfNewsComponent,
    SfMainComponent,
    SfNewPostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
