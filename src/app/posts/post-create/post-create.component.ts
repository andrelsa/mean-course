import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {

  enteredValue = '';
  newPost = 'NO CONTENT';

  ondAddPost() {
    // alert('Post added!');
    this.newPost = this.enteredValue;
  }

  constructor() { }

  ngOnInit() {
  }

}
