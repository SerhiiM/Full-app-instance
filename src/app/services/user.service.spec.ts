import {fakeAsync, inject, TestBed, tick} from '@angular/core/testing';

import { UserService } from './user.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

describe('UserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UserService]
    });
  });

  it('should be created', () => {
    const service: UserService = TestBed.get(UserService);
    expect(service).toBeTruthy();
  });

  it('should receive user list', () => {
    fakeAsync(
      inject([UserService, HttpTestingController], (userService: UserService, backend: HttpTestingController) => {
        const URL = 'http://127.0.0.1:8080/users';
        const responseUserList = [{id: 1, name: 'Test User'}];

        userService.fetch();

        const requestWrapper = backend.expectOne({url: URL});
        requestWrapper.flush(responseUserList);

        tick();

        expect(requestWrapper.request.method).toEqual('GET');
        expect(userService.userList$.getValue()).toEqual(responseUserList);

      })
    );
  });
});
