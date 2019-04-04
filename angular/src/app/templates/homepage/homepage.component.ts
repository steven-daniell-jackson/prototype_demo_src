import { Component, OnInit } from "@angular/core";
import { Event as RouterEvent } from "@angular/router";
import { Router } from "@angular/router";
import { RouteConfigLoadEnd } from "@angular/router";
import { RouteConfigLoadStart } from "@angular/router";
@Component({
  selector: "app-homepage",
  templateUrl: "./homepage.component.html",
  styleUrls: ["./homepage.component.scss"]
})
export class HomepageComponent implements OnInit {
  public isShowingRouteLoadIndicator: boolean;

  homepageBlocks = [
    {
      blockName: "HTML 5",
      blockContains: "HTML5 and DOM References",
      blockImage: "html5",
      blockRouterLink: "./html-landing-page"
    },
    {
      blockName: "Bootstrap",
      blockContains: "Prebuild Components and References",
      blockImage: "bootstrap",
      blockRouterLink: "./bootstrap-landing-page"
    },
    {
      blockName: "CSS 3",
      blockContains: "CSS Basic, Advanced, Snippets and References",
      blockImage: "css3",
      blockRouterLink: "./css-landing-page"
    },
    {
      blockName: "Javascript",
      blockContains: "Frameworks, Components and References",
      blockImage: "javascript",
      blockRouterLink: "./javascript-landing-page"
    },
    {
      blockName: "PHP",
      blockContains: "Frameworks and References",
      blockImage: "php",
      blockRouterLink: "./php-landing-page"
    }
  ];

  ngOnInit() {}

  // I initialize the app view component.
  constructor(router: Router) {
    this.isShowingRouteLoadIndicator = false;

    // As the router loads modules asynchronously (via loadChildren), we're going to
    // keep track of how many asynchronous requests are currently active. If there is
    // at least one pending load request, we'll show the indicator.
    let asyncLoadCount = 0;

    // The Router emits special events for "loadChildren" configuration loading. We
    // just need to listen for the Start and End events in order to determine if we
    // have any pending configuration requests.
    router.events.subscribe(
      (event: RouterEvent): void => {
        if (event instanceof RouteConfigLoadStart) {
          asyncLoadCount++;
        } else if (event instanceof RouteConfigLoadEnd) {
          asyncLoadCount--;
        }

        // If there is at least one pending asynchronous config load request,
        // then let's show the loading indicator.
        // --
        // CAUTION: I'm using CSS to include a small delay such that this loading
        // indicator won't be seen by people with sufficiently fast connections.
        this.isShowingRouteLoadIndicator = !!asyncLoadCount;
      }
    );
  }
}
