import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeleteComponent } from './delete/delete.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ServicesComponent } from './services/services.component';

const routes: Routes = [
  { path : '', redirectTo : "/login", pathMatch : "full" },
  { path : "login", component : LoginComponent },
  { path : "register", component : RegisterComponent },
  { path : "service", component : ServicesComponent  },
  { path : "delete", component : DeleteComponent },
  { path : "home", component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

