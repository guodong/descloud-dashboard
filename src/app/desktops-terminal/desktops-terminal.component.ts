import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import * as xterm from 'xterm';
import {ApiService} from "../api.service";
import {Desktop} from "../desktop";

@Component({
  selector: 'app-desktops-terminal',
  templateUrl: './desktops-terminal.component.html',
  styleUrls: ['./desktops-terminal.component.css']
})
export class DesktopsTerminalComponent implements OnInit {
  desktop: Desktop = new Desktop('', '');
  term: any;

  constructor(private apiService: ApiService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    var me = this;
    this.term = new xterm();
    var container = document.getElementById('terminal-container');
    this.term.open(container);
    var id = this.route.snapshot.params['id'];
    this.apiService.getDesktopInfo(id).subscribe(
      resp => {
        this.desktop = resp;
        this.apiService.getTerminalToken(this.desktop).subscribe(
          resp1 => {
            var token = resp1.token;
            var ws = new WebSocket('ws://rancher.cloudwarehub.com:8080/v1/exec/?token=' + token);

            this.term.on('key', (key, ev) => {
              ws.send(btoa(key));
            });

            ws.onmessage = function (msg) {
              me.term.write(atob(msg.data));
            }
          }
        );
      }
    );
  }

}
