import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from '@app/features/user';

@Component({
  selector: 'app-b',
  templateUrl: './b.component.html',
  styleUrls: ['./b.component.scss']
})
export class BComponent implements OnInit {

  users = this.userService.list('UsersB');

  constructor(public userService: UserService) {}

  ngOnInit() {
  }

}
