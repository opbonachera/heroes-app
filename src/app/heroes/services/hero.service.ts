import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable, pipe, catchError, of, map } from 'rxjs';

import { Hero } from '../interfaces/hero.interface'
import { environment } from 'src/environments/environment';

@Injectable({providedIn:'root'})

export class HeroService{
    constructor(private httpClient: HttpClient){}

    private baseUrl:string =  'http://localhost:4300';

    getHeros():Observable<Hero[]>{
        return this.httpClient.get<Hero[]>(`${this.baseUrl}/heroes`)
    }

    getHeroById(id:string):Observable<Hero | undefined>{
        return this.httpClient.get<Hero>(`${this.baseUrl}/heroes/${id}`)
        .pipe(
            catchError(error=>of(undefined))
        )
    }

    getSuggestions(query:String):Observable<Hero[]>{
        return this.httpClient.get<Hero[]>(`${this.baseUrl}/heroes?q=${query}&_limit=4`);       
    }

    // Crud functions
    addHero(hero:Hero):Observable<Hero>{
        return this.httpClient.post<Hero>(`${this.baseUrl}/heroes`, hero)
    }

    updateHero( hero: Hero ): Observable<Hero> {
        if ( !hero.id ) throw Error('Hero id is required');
    
        return this.httpClient.patch<Hero>(`${ this.baseUrl }/heroes/${ hero.id }`, hero );
      }

    deleteHeroById( id:string ):Observable<boolean>{
        return this.httpClient.delete(`${this.baseUrl}/heroes/${id}`)
        .pipe(
            catchError(err=>of(false)),
            map(resp=>true)
        )
    }
}