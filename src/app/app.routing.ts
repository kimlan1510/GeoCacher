import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import components
import { LocateComponent } from './locate/locate.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes =[
  {
    path: '',
    component: HomeComponent

  },
  {
    path: 'locate-cache',
    component: LocateComponent
  }

]

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
