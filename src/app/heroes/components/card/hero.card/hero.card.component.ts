import { Component, OnInit, Input } from '@angular/core';

import { Hero } from 'src/app/heroes/interfaces/hero.interface';

@Component({
  selector: 'hero-card-component',
  templateUrl: './hero.card.component.html',
  styleUrls: ['./hero.card.component.css']
})

export class HeroCardComponent implements OnInit{
  @Input()
  public hero!: Hero;

  ngOnInit(): void {
    if(!this.hero){
      throw new Error("Loading...");
      
    }  
  }
}
