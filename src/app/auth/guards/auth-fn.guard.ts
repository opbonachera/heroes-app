import { inject } from "@angular/core";
import { tap } from "rxjs"
import { AuthService } from "../services/auth.service";
import { Router } from "@angular/router";

export const AuthGuard = () =>{
    const loggedUser = inject(AuthService)
    const router = inject(Router)

    return loggedUser.checkAuthentication()
    // Returns a boolean that indicates if the user is authenticated or not
    .pipe(
        tap( isAuthenticated =>{
            if(!isAuthenticated) router.navigate(['/auth/login'])
        })
    )
}