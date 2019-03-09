import { Component, OnInit } from "@angular/core";
import { myAnimation } from "../../../animations";
// import {
//   transition,
//   trigger,
//   query,
//   style,
//   animate,
//   group,
//   animateChild
// } from "@angular/animations";

@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.scss"],
  animations: [myAnimation]
})
export class MainComponent implements OnInit {
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
