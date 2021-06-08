import { Component, Input, OnInit } from '@angular/core';
import { PostObject, SfPostService } from '../common/sf-post.service';

@Component({
  selector: 'sf-other-bubble',
  templateUrl: './sf-other-bubble.component.html',
  styleUrls: ['./sf-other-bubble.component.css']
})
export class SfOtherBubbleComponent implements OnInit {
	readmore = '{{ read more }}'
	@Input() post: PostObject | null = null;
	constructor(private service: SfPostService) { }

	ngOnInit(): void {	  
  }

}
