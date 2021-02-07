import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-sf-new-post',
  templateUrl: './sf-new-post.component.html',
  styleUrls: ['./sf-new-post.component.css']
})
export class SfNewPostComponent implements OnInit {
	form: FormGroup = new FormGroup({
		type: new FormControl('Project'),
		title: new FormControl(),
		content: new FormControl()
	});

	constructor() { }

	ngOnInit(): void {
		this.form = new FormGroup({
			type: new FormControl('Project'),
			title: new FormControl('', Validators.compose([
				Validators.required,
				Validators.pattern('[\\w\\-\\s\\/]+')
			])),
			content: new FormControl('', Validators.required)
      
    });
  }
	onSubmit(post: any) {
		console.log(post)
  }

}
