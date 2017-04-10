import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {Desktop} from "../desktop";
import {ApiService} from "../api.service";

@Component({
  selector: 'app-desktops-create',
  templateUrl: './desktops-create.component.html',
  styleUrls: ['./desktops-create.component.css']
})
export class DesktopsCreateComponent implements OnInit {

  model = new Desktop('', 'Desktop');
  loading = false;

  constructor(
    private apiService: ApiService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  submit() {
    this.loading = true;
    this.apiService.createDesktop(this.model)
      .subscribe(
        resp => this.router.navigate(['/desktops'])
      )
  }

}
