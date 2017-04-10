import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {Desktop} from "../desktop";
import {ApiService} from "../api.service";

@Component({
  selector: 'app-desktops-stats',
  templateUrl: './desktops-stats.component.html',
  styleUrls: ['./desktops-stats.component.css']
})
export class DesktopsStatsComponent implements OnInit {

  desktop: Desktop;
  ws: any;

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService
  ) { }

  ngOnInit() {
    var me = this;
    this.desktop = new Desktop('', '');
    var id = this.route.snapshot.params['id'];
    //me.apiService.getStatsInfo()
  }

}
