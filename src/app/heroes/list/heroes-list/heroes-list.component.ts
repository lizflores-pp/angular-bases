import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.css']
})
export class HeroesListComponent {
  public heroNames: string[] = ['Spiderman', 'Ironman', 'Hulk', 'She Hulk', 'Thor'];

  public deletedHero?: string;

  removeLastHero():void {
    this.deletedHero = this.heroNames.at(-1);
    this.heroNames.pop();
  }

  resetHeroes():void {
    this.heroNames = ['Spiderman', 'Ironman', 'Hulk', 'She Hulk', 'Thor'];
    this.deletedHero = undefined;
  }
}
