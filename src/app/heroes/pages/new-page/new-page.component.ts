import { Component,OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';

import { Hero, Publisher } from '../../interfaces/hero.interface';
import { HeroService } from '../../services/hero.service';
@Component({
  selector: 'app-new-page',
  templateUrl: './new-page.component.html',
  styleUrls: ['./new-page.component.css']
})

export class NewPageComponent implements OnInit{
  public heroForm = new FormGroup({
    'id':                new FormControl<string>(''),
    'superhero':         new FormControl<string>('',{ nonNullable:true }),
    'publisher':         new FormControl<Publisher>(Publisher.DCComics),
    'alter_ego':         new FormControl(''),
    'first_appearance':  new FormControl(''),
    'characters':        new FormControl(''),
    'alt_img':           new FormControl('')
  })

  public publishers = [
    { id: 'DC Comics', desc:'DC - Comics'},
    { id: 'Marvel', desc:'Marvel'}
  ]

  constructor( private heroService: HeroService,
               private activatedRoute: ActivatedRoute,
               private router: Router
    ){}

  ngOnInit(){
    if( !this.router.url.includes('edit') ) return;

    this.activatedRoute.params
    .pipe(
      switchMap(({ id })=>this.heroService.getHeroById(id))
    )
  }

  get currentHero(): Hero{
    const hero = this.heroForm.value as Hero
    return hero;
  }
  onSubmit(){
    if(!this.heroForm.valid) return;

    if( this.currentHero.id ){
      this.heroService.updateHero(this.currentHero)
      .subscribe(hero=>{console.log(hero)})
    }
    return;
  }
}
