import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero'
import { HeroService } from '../services/hero.service';

@Component({
  selector: 'sw-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];
  // selectedHero?: Hero;
  // onSelect(hero: Hero): void {
  //   this.selectedHero = hero;
  // }

  constructor(private heroService: HeroService) {}

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(myResult => this.heroes = myResult);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero).subscribe(hero => {
      this.heroes = this.heroes ? [...this.heroes, hero] : [hero];
    });
  }

  ngOnInit(): void {
    this.getHeroes();
  }
}

