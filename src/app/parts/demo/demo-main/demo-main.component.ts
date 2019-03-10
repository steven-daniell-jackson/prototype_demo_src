import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-demo-main",
  templateUrl: "./demo-main.component.html",
  styleUrls: ["./demo-main.component.scss"]
})
export class DemoMainComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  prepareRoute(outlet: RouterOutlet) {
    return (
      outlet &&
      outlet.activatedRouteData &&
      outlet.activatedRouteData["animation"]
    );
  }
}
