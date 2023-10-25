import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

import { Hero } from '../../interfaces/hero.interface';
import { HeroService } from '../../services/hero.service';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})

export class SearchPageComponent {
  public searchInput = new FormControl('');
  public heroes: Hero[] = [];

  constructor(public heroService: HeroService){}

  public selectedHero?: Hero;

  searchHero(){
    const value:string = this.searchInput.value || ''

    if(!value){ this.heroes = [] }

    this.heroService.getSuggestions(value).subscribe((heroes)=>this.heroes=heroes)
  }

  onSelectedOption(event:MatAutocompleteSelectedEvent):void{
    
    if(!event.option.value){
      this.selectedHero = undefined;
      return;
    }

    const hero: Hero = event.option.value;

    this.searchInput.setValue(hero.superhero);
  }
}
