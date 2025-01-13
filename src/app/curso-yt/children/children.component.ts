import { Component, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'children',
  templateUrl: './children.component.html',
  styleUrls: ['./children.component.css']
})
export class ChildrenComponent {
  @Input()
  title?: string;

  titleChange = new EventEmitter<string>();

  emitTitleChange(){
    console.log(this.title);

  }
}
