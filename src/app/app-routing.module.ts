import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ParkCarComponent } from './components/park-car/park-car.component';


const routes: Routes = [
  { path: '', redirectTo: '/home-page' , pathMatch: 'full' },
  {path: 'home-page' , component : LandingPageComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'park-car', component: ParkCarComponent},
  {path:'**', redirectTo: '/home-page'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
