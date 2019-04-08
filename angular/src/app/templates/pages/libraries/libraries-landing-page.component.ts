import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-libraries-landing-page",
  templateUrl: "./libraries-landing-page.component.html",
  styleUrls: ["./libraries-landing-page.component.scss"]
})
export class LibrariesLandingPageComponent implements OnInit {
  homepageBlocks = [
    {
      blockName: "jQuery",
      blockContains: "jQuery References",
      blockImage: "jquery",
      blockRouterLink: "/jquery-landing-page"
    }
  ];
  constructor() {}

  ngOnInit() {}
}
