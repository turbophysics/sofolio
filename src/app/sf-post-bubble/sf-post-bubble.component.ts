import { PostObject } from '../common/sf-post.service'
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'sf-post-bubble',
  templateUrl: './sf-post-bubble.component.html',
  styleUrls: ['./sf-post-bubble.component.css']
})
export class SfPostBubbleComponent implements OnInit {

	continue = "{{ continue reading }}";

	@Input() post: any;

	constructor() { }

	ngOnInit(): void {
	}

}
