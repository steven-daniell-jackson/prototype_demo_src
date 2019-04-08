import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-projects-landing-page",
  templateUrl: "./projects-landing-page.component.html",
  styleUrls: ["./projects-landing-page.component.scss"]
})
export class ProjectsLandingPageComponent implements OnInit {
  homepageBlocks = [
    {
      blockName: "CSS 3",
      blockContains: "CSS Basic, Advanced, Snippets and References",
      blockImage: "css3",
      blockRouterLink: "/css-landing-page"
    }
  ];
  constructor() {}

  ngOnInit() {}
}
