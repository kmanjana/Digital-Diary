import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { BlogComponent } from './blog/blog.component';
import { BlogsComponent } from './blogs/blogs.component';
import { AboutComponent } from './about/about.component';

import { HomeComponent } from './home/home.component';
import { AddnewpostComponent } from './posts/addnewpost/addnewpost.component';
import { MypostsComponent } from './posts/myposts/myposts.component';
import { UpdatepostComponent } from './posts/updatepost/updatepost.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

const routes: Routes = [
  {path: '',
   component: HomeComponent},

   {path: 'about',
   component: AboutComponent},

  {path: 'blogs',
   component: BlogsComponent},

   {path: 'user-profile',
  component: UserProfileComponent},

  {path: 'login',
   component:LoginComponent},

  {path: 'signup',
   component:SignupComponent},
   
  {path: 'myposts',
   canActivate : [AuthGuard],
   component: MypostsComponent},

   {path: 'addnewpost',
    canActivate : [AuthGuard],
    component: AddnewpostComponent},

   {path: 'updatepost',
    component: UpdatepostComponent},

    {path :'blog',
    component:BlogComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
