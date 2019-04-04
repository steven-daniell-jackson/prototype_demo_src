import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomepageComponent } from "./templates/homepage/homepage.component";
import { HtmlLandingPageComponent } from "./templates/pages/html-landing-page/html-landing-page.component";
import { CssLandingPageComponent } from "./templates/pages/css-landing-page/css-landing-page.component";
import { BootstrapLandingPageComponent } from "./templates/pages/bootstrap-landing-page/bootstrap-landing-page.component";
import { JavascriptLandingPageComponent } from "./templates/pages/javascript-landing-page/javascript-landing-page.component";
import { PhpLandingPageComponent } from "./templates/pages/php-landing-page/php-landing-page.component";
import { ErrorPageComponent } from "./templates/error-page/error-page.component";

const routes: Routes = [
  {
    path: "",
    component: HomepageComponent,
    pathMatch: "full",
    data: { animation: "HomePage" }
  },
  // Landing Pages
  {
    path: "html-landing-page",
    component: HtmlLandingPageComponent,
    data: { animation: "ModulePage" }
  },
  {
    path: "css-landing-page",
    component: CssLandingPageComponent,
    data: { animation: "ModulePage" }
  },
  {
    path: "bootstrap-landing-page",
    component: BootstrapLandingPageComponent,
    data: { animation: "ModulePage" }
  },
  {
    path: "javascript-landing-page",
    component: JavascriptLandingPageComponent,
    data: { animation: "ModulePage" }
  },
  {
    path: "php-landing-page",
    component: PhpLandingPageComponent,
    data: { animation: "ModulePage" }
  },
  {
    path: "html",
    loadChildren: "./modules/html/html.module#HtmlModule",
    data: { animation: "ModulePage" }
  },
  {
    path: "error",
    component: ErrorPageComponent,
    data: { animation: "HomePage" }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
