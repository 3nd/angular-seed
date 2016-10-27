import { RouterModule } from '@angular/router';

export const AppRoutingModule = RouterModule.forRoot([
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  { path: 'home', loadChildren: './app/home/home.module#HomeModule' },
  { path: 'about', loadChildren: './app/about/about.module#AboutModule' }
]);

