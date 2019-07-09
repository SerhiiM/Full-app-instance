import {Component, EventEmitter, Input, Output} from '@angular/core';
import {User} from '../interfaces/user';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent {
  @Input() user: User;
  @Output() userChange = new EventEmitter<User>();
  @Output() handleConfirm = new EventEmitter<any>();
  constructor() { }
}
