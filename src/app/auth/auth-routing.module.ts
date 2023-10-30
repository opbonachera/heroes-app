import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { Router } from "express";
import { LayoutPageComponent } from "./pages/layout-page/layout-page.component";
import { LoginPageComponent } from "./pages/login-page/login-page.component";
import { PublicGuard } from "./guards/public.guard";

const routes: Routes = [
    {
        path:'',
        component: LayoutPageComponent,
        children:[
            {
                path:'login',
                component:LoginPageComponent,
            },
            {
                path:'register',
                component:LoginPageComponent
            },
        ]
    }
];

@NgModule({
    imports:[
        RouterModule.forChild(routes)
    ],
    exports:[
        RouterModule
    ]
})

export class AuthRoutingModule{}