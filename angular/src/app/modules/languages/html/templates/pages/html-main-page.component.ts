import { Component, OnInit } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { moduleAnimation } from "src/app/animations";
@Component({
  selector: "app-html-main-page",
  templateUrl: "./html-main-page.component.html",
  styleUrls: ["./html-main-page.component.scss"],
  animations: [moduleAnimation]
})
export class HtmlMainPageComponent {
  menuItems: any = [
    {
      linkText: "DOM Attributes",
      routerLink: "./html-dom-attributes",
      icon: "code"
    },
    { linkText: "DOM Console", routerLink: "./html-dom-console", icon: "code" },
    {
      linkText: "DOM Document",
      routerLink: "./html-dom-document",
      icon: "code"
    },
    { linkText: "DOM Element", routerLink: "./html-dom-element", icon: "code" },
    { linkText: "DOM Events", routerLink: "./html-dom-events", icon: "code" },
    {
      linkText: "DOM Event-objects",
      routerLink: "./html-dom-event-objects",
      icon: "code"
    },
    {
      linkText: "DOM Geolocation",
      routerLink: "./html-dom-geolocation",
      icon: "code"
    },
    { linkText: "DOM History", routerLink: "./html-dom-history", icon: "code" },
    {
      linkText: "DOM Location",
      routerLink: "./html-dom-location",
      icon: "code"
    },
    {
      linkText: "DOM Navigator",
      routerLink: "./html-dom-navigator",
      icon: "code"
    },
    { linkText: "DOM Storage", routerLink: "./html-dom-storage", icon: "code" },
    { linkText: "DOM Style", routerLink: "./html-dom-style", icon: "code" },
    { linkText: "DOM Window", routerLink: "./html-dom-window", icon: "code" },

    {
      linkText: "Ref Attributes",
      routerLink: "./html-attributes",
      icon: "code"
    },
    {
      linkText: "Ref Audio/Video",
      routerLink: "./html-audio-video",
      icon: "code"
    },
    { linkText: "Ref Canvas", routerLink: "./html-canvas", icon: "code" },
    { linkText: "Ref Colors", routerLink: "./html-colors", icon: "code" },
    { linkText: "Ref Events", routerLink: "./html-events", icon: "code" },
    { linkText: "Ref Tags", routerLink: "./html-tags", icon: "code" }
  ];

  constructor() {}

  

  prepareRoute(outlet: RouterOutlet) {
    return (
      outlet &&
      outlet.activatedRouteData &&
      outlet.activatedRouteData["animation"]
    );
  }
}
