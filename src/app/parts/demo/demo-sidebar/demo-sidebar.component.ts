import { Component, OnInit } from "@angular/core";
import {
  animate,
  state,
  style,
  transition,
  trigger
} from "@angular/animations";

@Component({
  selector: "app-demo-sidebar",
  templateUrl: "./demo-sidebar.component.html",
  styleUrls: ["./demo-sidebar.component.scss"],
  animations: [
    trigger("DemoMenuOpen", [
      state(
        "close",
        style({
          opacity: 0,
          backgroundColor: "#fff",
          left: "-100px",
          width: "0vh",
          display: "none"
        })
      ),
      state(
        "open",
        style({
          opacity: 1,
          backgroundColor: "#343a40",
          left: "0px",
          width: "25vh",
          display: "block"
        })
      ),
      transition("close <=> open", animate(200))
    ])
  ]
})
export class DemoSidebarComponent implements OnInit {
  isMenuOpen = false;

  constructor() {}

  ngOnInit() {}

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
