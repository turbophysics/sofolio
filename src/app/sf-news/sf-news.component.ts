import { Component, OnInit } from '@angular/core';
import { PostObject, SfPostService } from '../common/sf-post.service';

@Component({
  selector: 'app-sf-news',
  templateUrl: './sf-news.component.html',
  styleUrls: ['./sf-news.component.css']
})
export class SfNewsComponent implements OnInit {
	news: PostObject[] | null = null;

	constructor(private service: SfPostService) { }

	ngOnInit(): void {
		this.news = this.service.getNews();
  }

}
