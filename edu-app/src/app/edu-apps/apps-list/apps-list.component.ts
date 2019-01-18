import { Component, OnInit } from '@angular/core';
import {IEduApp} from "../../shared/models/IEduApp";
import {IUser} from "../../shared/models/IUser";
import {EduAppType} from "../../shared/models/EduAppType";

@Component({
  selector: 'app-apps-list',
  templateUrl: './apps-list.component.html',
  styleUrls: ['./apps-list.component.css']
})
export class AppsListComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  getModules(): IEduApp[] {
    let user: IUser = {
      id: 1,
      firstName: 'Admin',
      lastName: 'Adminov',
      email: 'admin@localhost',
      login: 'admin',
    };
    return [
      {
        id: 1,
        name: 'Приложение 1',
        creator: user,
        url: '/apps/view/1',
        type: EduAppType.INTERACTIVE_APP,
        status: true,
      },
      {
        id: 1,
        name: 'Приложение 2',
        creator: user,
        url: '/apps/view/1',
        type: EduAppType.INTERACTIVE_APP,
        status: true,
      },
      {
        id: 1,
        name: 'Приложение 3',
        creator: user,
        url: '/apps/view/1',
        type: EduAppType.STATIC_APP,
        status: true,
      },
    ];
  }
}
