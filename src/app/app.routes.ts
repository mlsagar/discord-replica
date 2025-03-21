import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { catchAllRoute, ClerkAuthGuardService } from 'ngx-clerk-iliad';

export const routes: Routes = [
    { 
        matcher: catchAllRoute('home'), 
        component: HomeComponent, 
        canActivate: [ClerkAuthGuardService] 
    },
    {
        path: "",
        component: LoginComponent,
    },
    {
        path: "register",
        component: RegisterComponent
    }
];
