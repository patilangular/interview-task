import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { TasklistComponent } from './tasklist/tasklist.component';
import { CreattaskComponent } from './creattask/creattask.component';

const routes: Routes = [
  {path:'',redirectTo:'/login',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'sign-up',component:SignUpComponent},
  

    {path:'task-list',component:TasklistComponent},
    {path:'create-task',component:CreattaskComponent},
    {path:'edit-task/:id',component:CreattaskComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
