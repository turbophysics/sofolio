import { Component, OnInit } from '@angular/core';
import { SfAuthService } from '../common/sf-auth.service';

@Component({
  selector: 'app-sf-sign-in',
  templateUrl: './sf-sign-in.component.html',
  styleUrls: ['./sf-sign-in.component.css']
})
export class SfSignInComponent implements OnInit {

	constructor(
	  public authService: SfAuthService
  ) { }

  ngOnInit(): void {
  }

}
