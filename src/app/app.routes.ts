import { Routes } from '@angular/router';
import { EasterEggComponent } from './easter-egg/easter-egg.component';
import { EasterEggGuardGuard } from './easter-egg/easter-egg-guard.guard';

export const routes: Routes = [
    { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
    { path: 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule) },
    { path: 'our-services', loadChildren: () => import('./our-services/our-services.module').then(m => m.OurServicesModule) },
    { path: 'easter-egg', component: EasterEggComponent, canActivate: [EasterEggGuardGuard]},
    { path: '**', redirectTo: 'home' }
  ];