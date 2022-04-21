import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent{
  
  @Input()
  name!: string;
  
  @Input()
  text!: string;
  
  @Output()
  save = new EventEmitter<{name: string, text: string}>();

  saveAttempt() {
    if(!this.name || !this.text){
      return false;
    }
    else {
      this.save.emit({name : this.name, text: this.text});
      this.name = '';
      this.text = '';
      return true;
    }
  }

}
