import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
@Component({
  selector: 'app-shared-side-nav',
  templateUrl: './shared-side-nav.component.html',
  styleUrls: ['./shared-side-nav.component.scss']
})
export class SharedSideNavComponent implements OnInit {
  @Input() menuItems: any[];

  @ViewChild('sidenav') sidenav: MatSidenav;

  close() {
    this.sidenav.close();
  }

  constructor() {}

  ngOnInit() {}
}
