import { Component, OnInit } from '@angular/core';
import { HeroService } from '../../services/hero.service';
import { Hero } from '../../interfaces/hero.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['list-page.css']
})
export class ListPageComponent implements OnInit{
  constructor(
    private heroService:HeroService,  
  ){}

  public heroes: Hero[] = [];

  ngOnInit(): void {
    this.heroService.getHeros().subscribe(heroes=>{
      this.heroes=heroes;
    })
  }
  
}
