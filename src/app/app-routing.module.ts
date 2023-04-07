import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/auth/login/login.component';
import { MainComponent } from './modules/main/main.component';
import { RegisterComponent } from './modules/auth/register/register.component';
import { AuthGuard } from './core/guards/auth.guard';
import { RoutesKeys } from './shared/ts/routes-keys.enum';

const routes: Routes = [
  {
    path: `${RoutesKeys.Main}`,
    component: MainComponent,
    pathMatch: 'full',
    canActivate: [AuthGuard],
  },
  {
    path: `${RoutesKeys.Login}`,
    component: LoginComponent,
  },
  {
    path: `${RoutesKeys.Register}`,
    component: RegisterComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
