import { Component, OnInit } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { compileNgModule } from '@angular/compiler';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'dbz-main-page',
  templateUrl: 'main-page.component.html'
})

export class MainPageComponent  {

  constructor ( private dbzService: DbzService ) {}

  get characters(): Character[]{
    return [...this.dbzService.characters];
  }

  onDeleteCharacter(id:string): void {
    this.dbzService.onDeleteCharacterById(id);
  }

  onNewCharacter(character: Character):void {
    this.dbzService.addCharacter(character);
  }

}
