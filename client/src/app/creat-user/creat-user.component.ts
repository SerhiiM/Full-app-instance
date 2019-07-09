import { Component, OnInit } from '@angular/core';
import {User} from '../interfaces/user';
import {UserService} from '../services/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-creat-user',
  templateUrl: './creat-user.component.html',
  styleUrls: ['./creat-user.component.scss']
})
export class CreatUserComponent implements OnInit {

  user: User;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.user = {
      name: ''
    };
  }

  submit() {
    this.userService.create(this.user.name);
    this.router.navigate(['/user-list']);
  }

}
