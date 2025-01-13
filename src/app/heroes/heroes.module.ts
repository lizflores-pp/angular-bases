import { NgModule } from "@angular/core";
import { HeroesListComponent } from "./list/heroes-list/heroes-list.component";
import { HeroComponent } from "./hero/hero.component";
import { CommonModule } from "@angular/common";
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    HeroComponent,
    HeroesListComponent,
  ],
  exports: [
    HeroComponent,
    HeroesListComponent,
  ]
})
export class HeroesModule {

}
