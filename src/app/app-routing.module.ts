import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './shared/pages/error-page/error-page.component';
import { AuthGuard } from './auth/guards/auth-fn.guard';
import { PublicGuard } from './auth/guards/public.guard';

const routes: Routes = [{
    path:'auth',
    loadChildren: ()=> import('./auth/auth.module').then((m=>m.AuthModule)),
    canActivate: [PublicGuard]
  },
  {
    path:'heroes',
    loadChildren: ()=> import('./heroes/heroes.module').then(m=>m.HeroesModule),
    canActivate: [AuthGuard],
    // canMatch: [AuthGuard]
  },
  {
    path:'404',
    component: ErrorPageComponent
  },
  {
    path:'',
    redirectTo:'heroes',
    pathMatch:'full'
  }
  ,{
    path:'**',
    component :ErrorPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
