import { Component,OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';

import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog, MatDialogRef, MatDialogModule } from '@angular/material/dialog';

import { Hero, Publisher } from '../../interfaces/hero.interface';
import { HeroService } from '../../services/hero.service';
import { ConfirmDialogComponent } from '../../components/confirm-dialog/confirm-dialog.component';
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
               private router: Router,
               private snackbar: MatSnackBar,
               private dialog: MatDialog
    ){}

  ngOnInit(){
    if( !this.router.url.includes('edit') ) return;

    this.activatedRoute.params
    .pipe(
      switchMap(({ id })=>this.heroService.getHeroById(id))
    ).subscribe(hero=>{
      if(!hero) return this.router.navigateByUrl("/")
      
      this.heroForm.reset( hero );
      return ''
    })
  }

  get currentHero(): Hero{
    const hero = this.heroForm.value as Hero
    return hero;
  }

  onSubmit(){
    if(!this.heroForm.valid) return;

    if( this.currentHero.id ){
      this.heroService.updateHero(this.currentHero)
      .subscribe(hero=>{
        this.showSnackbar(`Hero ${ hero.id } has been updated`);
      })
      return;
    }

    this.heroService.addHero(this.currentHero)
    .subscribe(hero=>{
      this.router.navigate(['/heroes/edit', hero.id])
      this.showSnackbar("New hero has been added")
    })
    
  }

  showSnackbar( message:string ):void{
    this.snackbar.open(message,'done',{
      duration:2500,
    })
  }

  onDeleteHero(){
    if(!this.currentHero.id) throw Error('Hero id is required');

    const dialogRef = this.dialog.open(ConfirmDialogComponent,{
      data: this.heroForm.value
    })

    dialogRef.afterClosed().subscribe(result=>{
      console.log("The dialog was closed")
      console.log({result})
    }
    )
  }
}
