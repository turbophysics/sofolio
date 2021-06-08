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
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { SfPostService } from './common/sf-post.service';
import { SfPostBubbleComponent } from './sf-post-bubble/sf-post-bubble.component';
import { SfNewsBubbleComponent } from './sf-news-bubble/sf-news-bubble.component';
import { SfNotFoundComponent } from './sf-not-found/sf-not-found.component';
import { SummaryPipe } from './common/summary.pipe';
import { SfOtherBubbleComponent } from './sf-other-bubble/sf-other-bubble.component'

@NgModule({
  declarations: [
    AppComponent,
    ProjectPostComponent,
    ProjectWriteupComponent,
    AboutComponent,
    ContactComponent,
    SfNewsComponent,
    SfMainComponent,
    SfNewPostComponent,
    NavbarComponent,
    SfPostBubbleComponent,
    SfNewsBubbleComponent,
    SummaryPipe,
    SfOtherBubbleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	ReactiveFormsModule,
	RouterModule.forRoot([
		{ path: '', component: SfMainComponent},
		{ path: 'about', component: AboutComponent},
		{ path: 'news', component: SfNewsComponent},
		{ path: 'contact', component: ContactComponent},
		{ path: 'post/:id', component: ProjectWriteupComponent},
		{ path: '**', component: SfNotFoundComponent},
	], { scrollPositionRestoration: 'enabled' })
	
  ],
	providers: [
	  SfPostService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
