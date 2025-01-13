import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { compileNgModule } from '@angular/compiler';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent {

  @Output()
  public oneNewCharacter: EventEmitter<Character> = new EventEmitter();
  public character: Character = {
    name: '',
    power: 0,
  }

  emitCharacter():void {
  if ( this.character.name.length === 0) return;

    this.oneNewCharacter.emit(this.character);
    this.character = {name: '', power: 0};
  }
}
