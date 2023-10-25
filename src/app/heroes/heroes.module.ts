import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroPageComponent } from './pages/hero-page/hero-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { NewPageComponent } from './pages/new-page/new-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { HeroesRoutingModule } from './heroes-routing.module';
import { MaterialModule } from '../material/material.module';
import { HeroCardComponent } from './components/card/hero.card/hero.card.component';
import { HeroimagePipe } from './pipes/heroimage.pipe';
import { ReactiveFormsModule } from '@angular/forms';
HeroCardComponent



@NgModule({
  declarations: [
    HeroPageComponent,
    ListPageComponent,
    LayoutPageComponent,
    NewPageComponent,
    SearchPageComponent,
    HeroCardComponent,
    HeroimagePipe
  ],
  imports: [
    CommonModule,
    HeroesRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  exports: [
    HeroimagePipe
  ]
})
export class HeroesModule { }
