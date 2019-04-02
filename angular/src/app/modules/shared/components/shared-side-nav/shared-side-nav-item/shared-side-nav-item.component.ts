import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-shared-side-nav-item",
  templateUrl: "./shared-side-nav-item.component.html",
  styleUrls: ["./shared-side-nav-item.component.scss"]
})
export class SharedSideNavItemComponent implements OnInit {
  @Input() routerLink: String;
  @Input() icon: String;
  @Input() linkText: String;
  constructor() {}

  ngOnInit() {}
}
