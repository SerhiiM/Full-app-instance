import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { HttpClientModule } from '@angular/common/http';
import { CreatUserComponent } from './creat-user/creat-user.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FormsModule } from '@angular/forms';
import { UserFormComponent } from './user-form/user-form.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    CreatUserComponent,
    UpdateUserComponent,
    NotFoundComponent,
    UserFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
