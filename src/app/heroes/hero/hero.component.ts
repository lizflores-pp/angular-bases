import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({

  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
    public name: string = "ironman";
    public age: number = 45;

    get capitalizeName():string{
        return this.name.toUpperCase();
    }

    getHeroDescription() :string {
      return `${this.name} - ${this.age}`;
    }

    changeHero():void {
      this.name = "Spiderman";
    }

    changeAge():void{
      this.age = 25;
    }

    resetForm() :void {
      this.name = 'Ironman',
      this.age = 45;
      document.querySelectorAll('h1').forEach(e => {
        e.innerHTML = '<h1>Desde Angular</h1>'
      });
    }
}
