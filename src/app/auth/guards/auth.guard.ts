// import { Injectable } from '@angular/core';
// import { ActivatedRouteSnapshot, CanActivate, CanMatch, Route, UrlSegment, UrlTree, RouterStateSnapshot, Router, CanActivateFn } from '@angular/router';
// import { Observable, tap } from 'rxjs';

// import { AuthService } from '../services/auth.service';

// @Injectable({ providedIn: 'root' })
// export class AuthGuard {


//   constructor(
//     private authService: AuthService,
//     private router: Router,
//   ) { }

//   private checkAuthStatus():boolean | Observable<boolean>{
//     return this.authService.checkAuthentication()
//     // Returns a boolean that indicates if the user is logged in or not
//     .pipe(
//         tap( isAuthenticated =>{
//             if(!isAuthenticated) this.router.navigate(['/auth/login'])
//         }), 
//     )
//   }


// //   canMatch(route: Route, segments: UrlSegment[]): boolean | Observable<boolean> {
// //     console.log("Can Match");
// //     console.log({ route });
// //     return this.checkAuthStatus();
// //   }

// //   canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> {
// //     console.log('Can Activate');
// //     console.log({ route, state });

// //     return this.checkAuthStatus();
// //   }

// }