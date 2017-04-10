import {Component, OnInit} from '@angular/core';
import {ApiService} from "../api.service";

@Component({
  selector: 'app-auth-callback',
  templateUrl: './auth-callback.component.html',
  styleUrls: ['./auth-callback.component.css']
})
export class AuthCallbackComponent implements OnInit {
  err = '';

  constructor(private apiService: ApiService) {
  }

  ngOnInit() {
    var me = this;
    var code = me.getParameterByName('code');
    me.apiService.getToken(code).subscribe(
      resp => {
        localStorage.setItem('token', resp.token);
        location.replace('/');
      },
      err => me.err = <any>err
    );
  }

  getParameterByName(name) {
    var url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
      results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
  }
}
