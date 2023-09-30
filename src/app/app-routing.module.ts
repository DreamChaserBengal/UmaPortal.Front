import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LapTimeComponent } from './components/lap-time/lap-time.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'lap-time', component: LapTimeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'prefix' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
