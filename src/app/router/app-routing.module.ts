import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from 'src/app/components/home/home.component';
import { AboutComponent } from 'src/app/components/about/about.component';
import { LoginComponent } from 'src/app/components/auth/login/login.component';
import { RegisterComponent } from 'src/app/components/auth/register/register.component';
import { RankingComponent } from 'src/app/components/ranking/ranking.component';
import { TestComponent } from  'src/app/components/test/test.component';
import { MonitoriaComponent } from  'src/app/components/monitoria/monitoria.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'about', component: AboutComponent },
  { path: 'ranking', component: RankingComponent},
  { path: 'test', component: TestComponent},
  { path: 'monitoria', component: MonitoriaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }