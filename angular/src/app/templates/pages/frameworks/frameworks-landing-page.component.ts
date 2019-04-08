import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-frameworks-landing-page",
  templateUrl: "./frameworks-landing-page.component.html",
  styleUrls: ["./frameworks-landing-page.component.scss"]
})
export class FrameworksLandingPageComponent implements OnInit {
  homepageBlocks = [
    {
      blockName: "Bootstrap",
      blockContains: "Prebuild Components and References",
      blockImage: "bootstrap",
      blockRouterLink: "/bootstrap-landing-page"
    }
  ];
  constructor() {}

  ngOnInit() {}
}
