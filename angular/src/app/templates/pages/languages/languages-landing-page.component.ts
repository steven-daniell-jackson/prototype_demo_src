import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-languages-landing-page",
  templateUrl: "./languages-landing-page.component.html",
  styleUrls: ["./languages-landing-page.component.scss"]
})
export class LanguagesLandingPageComponent implements OnInit {
  homepageBlocks = [
    {
      blockName: "HTML 5",
      blockContains: "HTML5 and DOM References",
      blockImage: "html5",
      blockRouterLink: "/html-landing-page"
    },
    {
      blockName: "CSS 3",
      blockContains: "CSS Basic, Advanced, Snippets and References",
      blockImage: "css3",
      blockRouterLink: "/css-landing-page"
    },
    {
      blockName: "Javascript",
      blockContains: "Frameworks, Components and References",
      blockImage: "javascript",
      blockRouterLink: "/javascript-landing-page"
    },
    {
      blockName: "PHP",
      blockContains: "Frameworks and References",
      blockImage: "php",
      blockRouterLink: "/php-landing-page"
    },

    {
      blockName: "MySql",
      blockContains: "MySql References",
      blockImage: "mysql",
      blockRouterLink: "/sql-landing-page"
    }
  ];
  constructor() {}

  ngOnInit() {}
}
