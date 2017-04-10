import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {ElementRef,Renderer2} from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';
import {Desktop} from "../desktop";
import {ApiService} from "../api.service";
import {UiService} from "../ui.service";

@Component({
  selector: 'app-desktops',
  templateUrl: './desktops.component.html',
  styleUrls: ['./desktops.component.css']
})
export class DesktopsComponent implements OnInit {

  desktops: Desktop[];
  noQuota: boolean = false;


  constructor(
    private apiService: ApiService,
    private uiService: UiService,
    private router: Router
  ) { }

  ngOnInit() {
    this.apiService.getDesktops().subscribe(
      desktops => this.desktops = desktops
    )
  }

  createDesktop() {
    if (this.desktops.length >= 2) {
      this.noQuota = true;
    } else {
      this.router.navigate(['/desktops/create']);
    }
  }

  openDesktop(desktop: Desktop) {
    this.uiService.collapseSidebar();
    this.router.navigate(['/desktops/view', desktop._id]);
  }

  removeDesktop(desktop: Desktop) {
    if (window.confirm('Do you really want to destroy it?')) {
      this.apiService.removeDesktop(desktop).subscribe(
        resp => {
          this.apiService.getDesktops().subscribe(
            desktops => this.desktops = desktops
          )
        }
      );
    }

  }

}
