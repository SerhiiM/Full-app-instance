import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  constructor(public userService: UserService) {}

  ngOnInit() {
    this.userService.fetch();
  }

  delete(id) {
    this.userService.delete(id);
  }
}
