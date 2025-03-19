import { Routes, UrlSegment } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { catchAllRoute, ClerkAuthGuardService } from 'ngx-clerk';
import { ProfileComponent } from './profile/profile.component';

export const routes: Routes = [
    { 
        matcher: catchAllRoute('home'), 
        component: HomeComponent, 
        canActivate: [ClerkAuthGuardService] 
    },
    {
        path: "",
        component: LoginComponent
    },
    {
        path: "register",
        component: RegisterComponent
    },
    {
        matcher: (url) => {
          if (url.length === 1 && url[0].path.match(/^@[\w]+$/gm)) {
            return {consumed: url, posParams: {username: new UrlSegment(url[0].path.slice(1), {})}};
          }
          return null;
        },
        component: ProfileComponent,
      },
];
