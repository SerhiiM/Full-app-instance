import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatUserComponent } from './creat-user.component';
import {FormsModule} from '@angular/forms';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {UserService} from '../services/user.service';
import {UserFormComponent} from '../user-form/user-form.component';

describe('CreatUserComponent', () => {
  let component: CreatUserComponent;
  let fixture: ComponentFixture<CreatUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatUserComponent , UserFormComponent],
      imports: [ FormsModule, RouterTestingModule.withRoutes([]) , HttpClientTestingModule],
      providers: [UserService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
