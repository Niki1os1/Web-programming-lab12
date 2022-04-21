import { Component } from '@angular/core';
import { Post } from './interfaces/post';
import { Form } from './interfaces/form';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'form-and-posts';
  
  allPosts = [
    {name: 'Default', text: 'default text', dateOfPublishing: Date.now()},
  ]

  get posts() {
    return this.allPosts;
  }

  save(ev: {name: string, text: string}) {
    
    if(!ev.name || !ev.text)
      return;

    this.allPosts.push({ 
      name : ev.name, 
      text : ev.text, 
      dateOfPublishing : Date.now()
    });

  }

  remove(post : Post) {
    this.allPosts.splice(this.allPosts.indexOf(post), 1);
  } 

}
