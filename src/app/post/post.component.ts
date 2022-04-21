import { Component, EventEmitter, Input, Output} from '@angular/core';
import { Post } from '../interfaces/post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  
  @Input()
  post!: Post;
  @Output() remove = new EventEmitter<Post>();


  get date() {
    return new Date(this.post.dateOfPublishing).toDateString();
  }
}
