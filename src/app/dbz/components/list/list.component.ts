import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  standalone: false
})
export class ListComponent {
  @Output()
  onDelete  = new EventEmitter<string>();


  @Input()
  public characterList: Character[] = [{
    name:'Trunks',
    power: 1000
  },
  {
    name: 'Lizeth',
    power: 0
  }];


  sendUUID(uuid?:string):void {
    if (uuid){
      this.onDelete.emit(uuid);
    }
  }
}
