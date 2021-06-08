import { Component, Input, OnInit } from '@angular/core';
import { PostObject } from '../common/sf-post.service';

@Component({
  selector: 'sf-news-bubble',
  templateUrl: './sf-news-bubble.component.html',
  styleUrls: ['./sf-news-bubble.component.css']
})
export class SfNewsBubbleComponent implements OnInit {

	@Input() news: PostObject | null = null;

  	constructor() { }

	ngOnInit(): void {
	}

}
