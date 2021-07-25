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
import { SfOtherBubbleComponent } from './sf-other-bubble/sf-other-bubble.component';
import { SfDashboardComponent } from './sf-dashboard/sf-dashboard.component';
import { SfSignInComponent } from './sf-sign-in/sf-sign-in.component';
import { SfSignUpComponent } from './sf-sign-up/sf-sign-up.component'
import { SfForgotPasswordComponent } from './sf-forgot-password/sf-forgot-password.component'
import { SfVerifyEmailComponent } from './sf-verify-email/sf-verify-email.component'
import { SfAuthService } from './common/sf-auth.service';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';

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
    SfOtherBubbleComponent,
    SfDashboardComponent,
    SfSignInComponent,
    SfSignUpComponent,
	SfForgotPasswordComponent,
	SfVerifyEmailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	ReactiveFormsModule,
	AngularFireModule.initializeApp(environment.firebase),
	RouterModule.forRoot([
		{ path: '', component: SfMainComponent},
		{ path: 'about', component: AboutComponent},
		{ path: 'news', component: SfNewsComponent},
		{ path: 'contact', component: ContactComponent},
		{ path: 'post/:id', component: ProjectWriteupComponent},
		{ path: 'sign-in', component: SfSignInComponent},
		{ path: 'register-user', component: SfSignUpComponent},
		{ path: 'forgot-password', component: SfForgotPasswordComponent},
		{ path: 'verify-email', component: SfVerifyEmailComponent},
		{ path: '**', component: SfNotFoundComponent},
	], { scrollPositionRestoration: 'enabled' })
	
  ],
	providers: [
		SfPostService,
		SfAuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
