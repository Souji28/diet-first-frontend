import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component';
import { StudentComponent } from './student/student.component';

const routes: Routes = [
  {path:"",component:LoginComponent},
   {path:"home",component:HomeComponent},
    {path:"registration",component:RegistrationComponent},
     {path:"student",component:StudentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
