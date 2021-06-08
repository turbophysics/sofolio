import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostObject, SfPostService } from '../common/sf-post.service';

@Component({
  selector: 'app-project-writeup',
  templateUrl: './project-writeup.component.html',
  styleUrls: ['./project-writeup.component.css']
})
export class ProjectWriteupComponent implements OnInit {
	post: PostObject | null = null;

	constructor(
		private route: ActivatedRoute,
		private service: SfPostService
	) { }

	ngOnInit(): void {
		this.route.paramMap
			.subscribe(params => {
				let id = Number(params.get('id'));
				this.post = this.service.getPostByID(id);
			})
  	}

}
