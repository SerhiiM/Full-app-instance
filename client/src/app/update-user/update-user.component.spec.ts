import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateUserComponent } from './update-user.component';
import {UserFormComponent} from '../user-form/user-form.component';
import {FormsModule} from '@angular/forms';
import {UserService} from '../services/user.service';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('UpdateUserComponent', () => {
  let component: UpdateUserComponent;
  let fixture: ComponentFixture<UpdateUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateUserComponent, UserFormComponent ],
      imports: [ FormsModule, RouterTestingModule.withRoutes([]) , HttpClientTestingModule],
      providers: [UserService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
