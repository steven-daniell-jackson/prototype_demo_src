import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HtmlReferenceAudioVideoComponent } from "./templates/pages/html-reference-audio-video/html-reference-audio-video.component";
import { HtmlReferenceCanvasComponent } from "./templates/pages/html-reference-canvas/html-reference-canvas.component";
import { HtmlReferenceColorsComponent } from "./templates/pages/html-reference-colors/html-reference-colors.component";
import { HtmlReferenceEventsComponent } from "./templates/pages/html-reference-events/html-reference-events.component";
import { HtmlReferenceTagsComponent } from "./templates/pages/html-reference-tags/html-reference-tags.component";
import { HtmlReferenceAttributesComponent } from "./templates/pages/html-reference-attributes/html-reference-attributes.component";
import { HtmlDomConsoleComponent } from "./templates/pages/html-dom-console/html-dom-console.component";
import { HtmlDomDocumentComponent } from "./templates/pages/html-dom-document/html-dom-document.component";
import { HtmlDomElementComponent } from "./templates/pages/html-dom-element/html-dom-element.component";
import { HtmlDomEventObjectsComponent } from "./templates/pages/html-dom-event-objects/html-dom-event-objects.component";
import { HtmlDomEventsComponent } from "./templates/pages/html-dom-events/html-dom-events.component";
import { HtmlDomGeolocationComponent } from "./templates/pages/html-dom-geolocation/html-dom-geolocation.component";
import { HtmlDomHistoryComponent } from "./templates/pages/html-dom-history/html-dom-history.component";
import { HtmlDomLocationComponent } from "./templates/pages/html-dom-location/html-dom-location.component";
import { HtmlDomNavigatorComponent } from "./templates/pages/html-dom-navigator/html-dom-navigator.component";
import { HtmlDomStorageComponent } from "./templates/pages/html-dom-storage/html-dom-storage.component";
import { HtmlDomStyleComponent } from "./templates/pages/html-dom-style/html-dom-style.component";
import { HtmlDomWindowComponent } from "./templates/pages/html-dom-window/html-dom-window.component";
import { HtmlMainPageComponent } from "./templates/pages/html-main-page/html-main-page.component";
import { SharedComponentsModule } from "../shared/shared-components.module";
import { HtmlDomAttributeComponent } from "./templates/pages/html-dom-attribute/html-dom-attribute.component";

const routes: Routes = [
  // HTML
  {
    path: "",
    component: HtmlMainPageComponent,
    data: { animation: "Html" },
    children: [
      {
        path: "html-attributes",
        data: { animation: "Html" },
        component: HtmlReferenceAttributesComponent
      },
      {
        path: "html-dom-attributes",
        data: { animation: "Html" },
        component: HtmlDomAttributeComponent
      },
      {
        path: "html-audio-video",
        data: { animation: "Html" },
        component: HtmlReferenceAudioVideoComponent
      },
      {
        path: "html-canvas",
        data: { animation: "Html" },
        component: HtmlReferenceCanvasComponent
      },
      {
        path: "html-colors",
        data: { animation: "Html" },
        component: HtmlReferenceColorsComponent
      },
      {
        path: "html-events",
        data: { animation: "Html" },
        component: HtmlReferenceEventsComponent
      },
      {
        path: "html-tags",
        data: { animation: "Html" },
        component: HtmlReferenceTagsComponent
      },
      {
        path: "html-dom-console",
        data: { animation: "Html" },
        component: HtmlDomConsoleComponent
      },
      {
        path: "html-dom-document",
        data: { animation: "Html" },
        component: HtmlDomDocumentComponent
      },
      {
        path: "html-dom-element",
        data: { animation: "Html" },
        component: HtmlDomElementComponent
      },
      {
        path: "html-dom-event-objects",
        component: HtmlDomEventObjectsComponent
      },
      { path: "html-dom-events", component: HtmlDomEventsComponent },
      { path: "html-dom-geolocation", component: HtmlDomGeolocationComponent },
      { path: "html-dom-history", component: HtmlDomHistoryComponent },
      { path: "html-dom-location", component: HtmlDomLocationComponent },
      { path: "html-dom-navigator", component: HtmlDomNavigatorComponent },
      { path: "html-dom-storage", component: HtmlDomStorageComponent },
      { path: "html-dom-style", component: HtmlDomStyleComponent },
      { path: "html-dom-window", component: HtmlDomWindowComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), SharedComponentsModule],
  exports: [],
  declarations: [
    HtmlReferenceAudioVideoComponent,
    HtmlReferenceCanvasComponent,
    HtmlReferenceEventsComponent,
    HtmlReferenceColorsComponent,
    HtmlReferenceTagsComponent,
    HtmlReferenceAttributesComponent,
    HtmlDomConsoleComponent,
    HtmlDomDocumentComponent,
    HtmlDomElementComponent,
    HtmlDomEventObjectsComponent,
    HtmlDomEventsComponent,
    HtmlDomGeolocationComponent,
    HtmlDomHistoryComponent,
    HtmlDomLocationComponent,
    HtmlDomNavigatorComponent,
    HtmlDomStorageComponent,
    HtmlDomStyleComponent,
    HtmlDomWindowComponent,
    HtmlMainPageComponent,
    HtmlDomAttributeComponent
  ]
})
export class HtmlRoutesModule {}
