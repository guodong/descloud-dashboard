import { Component } from '@angular/core';
import {ApiService} from "./api.service";
import {UiService} from "./ui.service";
import {User} from "./user";

@Component({
  selector: 'body',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  err = '';
  user: User = new User;
  collapse = false;

  constructor(private apiService: ApiService, private uiService: UiService) { }

  ngOnInit() {
    var me = this;
    this.apiService.getUserInfo().subscribe(
      resp => {
        console.log(resp)
        me.user = resp;
      },
      err => me.err = <any>err
    );
  }

  toggleSidebar() {
    this.uiService.toggleSidebar();
  }

  signout() {
    localStorage.removeItem('token');
    location.replace('http://descloud.io');
  }
}
