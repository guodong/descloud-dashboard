import { Injectable } from '@angular/core';

@Injectable()
export class UiService {
  
  private collapse: boolean = false;

  constructor() { }


  toggleSidebar() {
    this.collapse = !this.collapse;
    if (this.collapse)
      document.body.classList.add("sidebar-collapse");
    else
      document.body.classList.remove("sidebar-collapse");
  }

  collapseSidebar() {
    this.collapse = true;
    document.body.classList.add("sidebar-collapse");
  }
}
