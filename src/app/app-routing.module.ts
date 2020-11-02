import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import {LoginComponent}   from    './login/login.component';
import {AboutComponent}   from    './about/about.component';

const routes: Routes = [
{
path:'',
redirectTo:'/home',
pathMatch:'full',
},
//{path :'login', component:LoginComponent},
{path :'about', component:AboutComponent},
{ path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
{ path: 'login', loadChildren: () => import('./auth/login/login.module').then(m => m.LoginModule) },
{ path: 'register', loadChildren: () => import('./auth/register/register.module').then(m => m.RegisterModule) },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
