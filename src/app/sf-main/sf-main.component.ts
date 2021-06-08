import { Component, OnInit } from '@angular/core';
import { PostObject, SfPostService } from '../common/sf-post.service';

@Component({
  selector: 'app-sf-main',
  templateUrl: './sf-main.component.html',
  styleUrls: ['./sf-main.component.css']
})
export class SfMainComponent implements OnInit {
	topPost: any;
	headline: any;
	posts: any;
	otherPosts: any;

  	constructor(private service: SfPostService) { }

	ngOnInit(): void {
		this.topPost = this.service.getTopPost();
		this.posts = this.service.getMainContent();
		this.headline = this.service.getHeadline();
		this.otherPosts = this.service.getOtherPosts()
  }

}
