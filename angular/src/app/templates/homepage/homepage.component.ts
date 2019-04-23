import { Component, OnInit } from '@angular/core';
import { Event as RouterEvent } from '@angular/router';
import { Router } from '@angular/router';
import { RouteConfigLoadEnd } from '@angular/router';
import { RouteConfigLoadStart } from '@angular/router';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  public isShowingRouteLoadIndicator: boolean;

  homepageBlocks = [
    {
      blockName: 'Languages',
      blockContains: 'HTML 5, CSS 3, Javascript, PHP, mySQL',
      blockImage: 'languages-image',
      blockRouterLink: '/languages-landing-page'
    },
    {
      blockName: 'Frameworks',
      blockContains: 'Bootstrap',
      blockImage: 'bootstrap',
      blockRouterLink: '/frameworks-landing-page'
    },
    {
      blockName: 'Libraries',
      blockContains: 'jQuery',
      blockImage: 'jquery',
      blockRouterLink: '/libraries-landing-page'
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
