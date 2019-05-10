import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../services/user.service';
import {User} from '../interfaces/user';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss']
})
export class UpdateUserComponent implements OnInit {

  user: User;

  constructor(private activeRoute: ActivatedRoute, private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.userService.fetch();
    this.activeRoute.params.subscribe(({ id }) => {
      this.userService.userList$.subscribe((users: User[]) => {
        this.user = users.find(u => u.id === parseInt(id, 10));
      });
    });
  }

  submit() {
    this.userService.update(this.user.id, this.user.name);
    this.router.navigate(['/user-list']);
  }
}
