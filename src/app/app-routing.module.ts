import { LoginComponent } from './modules/authentication/components/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './modules/authentication/components/register/register.component';
import { WorkspaceComponent } from './modules/workspace/components/workspace.component';
import { AuthGuard } from './core/auth/auth.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: '', component: WorkspaceComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'home',
        loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule),
        canActivate: [AuthGuard]
      },
      {
        path: 'cases',
        loadChildren: () => import('./modules/cases/cases.module').then(m => m.CasesModule),
        canActivate: [AuthGuard]
      },
      {
        path: 'people',
        loadChildren: () => import('./modules/people/people.module').then(m => m.PeopleModule),
        canActivate: [AuthGuard]
      }
    ]
  },
  { path: '**', redirectTo: '/login' } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
