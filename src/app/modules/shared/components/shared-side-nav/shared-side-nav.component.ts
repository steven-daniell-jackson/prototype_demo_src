import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-shared-side-nav",
  templateUrl: "./shared-side-nav.component.html",
  styleUrls: ["./shared-side-nav.component.scss"]
})
export class SharedSideNavComponent implements OnInit {
  @Input() menuItems: any[];

  constructor() {}

  ngOnInit() {}
}
