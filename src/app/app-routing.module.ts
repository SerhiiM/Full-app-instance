import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import {CreatUserComponent} from './creat-user/creat-user.component';
import {UpdateUserComponent} from './update-user/update-user.component';
import {NotFoundComponent} from './not-found/not-found.component';

const routes: Routes = [
  {
    path: 'user-list',
    component: UserListComponent
  },
  {
    path: 'create-user',
    component: CreatUserComponent
  },
  {
    path: 'update-user/:id',
    component: UpdateUserComponent
  },
  { path: '',   redirectTo: '/user-list', pathMatch: 'full' },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
