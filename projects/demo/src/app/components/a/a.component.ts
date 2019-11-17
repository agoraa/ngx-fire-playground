import { Component, OnInit } from '@angular/core';
import { UserService } from '@app/features/user';

@Component({
  selector: 'app-a',
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.scss']
})
export class AComponent implements OnInit {

  users = this.userService.list('UsersA');

  constructor(public userService: UserService) {}

  ngOnInit() {
    this.users.add({
      displayName: 'Priscilla',
      description: 'Wow !'
    });
  }

}
