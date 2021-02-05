import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectPostComponent } from './project-post/project-post.component';
import { ProjectWriteupComponent } from './project-writeup/project-writeup.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { SfNewsComponent } from './sf-news/sf-news.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectPostComponent,
    ProjectWriteupComponent,
    AboutComponent,
    ContactComponent,
    SfNewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
