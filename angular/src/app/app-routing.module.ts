import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomepageComponent } from "./templates/homepage/homepage.component";
import { ErrorPageComponent } from "./templates/error-page/error-page.component";
import { LanguagesLandingPageComponent } from "./templates/pages/languages/languages-landing-page.component";
import { FrameworksLandingPageComponent } from "./templates/pages/frameworks/frameworks-landing-page.component";
import { LibrariesLandingPageComponent } from "./templates/pages/libraries/libraries-landing-page.component";
import { OtherLandingPageComponent } from "./templates/pages/other-landing-page/other-landing-page.component";
import { ProjectsLandingPageComponent } from "./templates/pages/projects-landing-page/projects-landing-page.component";
import { HtmlLandingPageComponent } from "./templates/pages/languages/html-landing-page/html-landing-page.component";
import { CssLandingPageComponent } from "./templates/pages/languages/css-landing-page/css-landing-page.component";
import { CssComponentsLandingPageComponent } from "./templates/pages/languages/css-landing-page/css-components-landing-page/css-components-landing-page.component";
import { BootstrapLandingPageComponent } from "./templates/pages/frameworks/bootstrap-landing-page/bootstrap-landing-page.component";
import { JavascriptLandingPageComponent } from "./templates/pages/languages/javascript-landing-page/javascript-landing-page.component";
import { PhpLandingPageComponent } from "./templates/pages/languages/php-landing-page/php-landing-page.component";
import { SqlLandingPageComponent } from "./templates/pages/languages/sql-landing-page/sql-landing-page.component";
import { JqueryLandingPageComponent } from "./templates/pages/libraries/jquery-landing-page/jquery-landing-page.component";
import { ChangelogComponent } from "./templates/changelog/changelog.component";

const routes: Routes = [
  {
    path: "",
    component: HomepageComponent,
    pathMatch: "full",
    data: { animation: "HomePage" }
  },
  /*************************************************************
                      Landing Pages
  *************************************************************/

  /*************************************************************
                      Main Pages
  *************************************************************/
  {
    path: "languages-landing-page",
    component: LanguagesLandingPageComponent,
    data: { animation: "LandingPage" }
  },
  {
    path: "frameworks-landing-page",
    component: FrameworksLandingPageComponent,
    data: { animation: "LandingPage" }
  },
  {
    path: "libraries-landing-page",
    component: LibrariesLandingPageComponent,
    data: { animation: "LandingPage" }
  },
  {
    path: "other-landing-page",
    component: OtherLandingPageComponent,
    data: { animation: "LandingPage" }
  },
  {
    path: "projects-landing-page",
    component: ProjectsLandingPageComponent,
    data: { animation: "LandingPage" }
  },
  {
    path: "error",
    component: ErrorPageComponent,
    data: { animation: "HomePage" }
  },
  {
    path: "changelog",
    component: ChangelogComponent,
    data: { animation: "HomePage" }
  },

  /*************************************************************
                      Tier Landing Pages
  *************************************************************/
  {
    path: "html-landing-page",
    component: HtmlLandingPageComponent,
    data: { animation: "LandingPage" }
  },
  {
    path: "css-landing-page",
    component: CssLandingPageComponent,
    data: { animation: "LandingPage" }
  },
  {
    path: "css-components-landing-page",
    component: CssComponentsLandingPageComponent,
    data: { animation: "LandingPage" }
  },

  {
    path: "bootstrap-landing-page",
    component: BootstrapLandingPageComponent,
    data: { animation: "LandingPage" }
  },
  {
    path: "javascript-landing-page",
    component: JavascriptLandingPageComponent,
    data: { animation: "LandingPage" }
  },
  {
    path: "php-landing-page",
    component: PhpLandingPageComponent,
    data: { animation: "LandingPage" }
  },
  {
    path: "sql-landing-page",
    component: SqlLandingPageComponent,
    data: { animation: "LandingPage" }
  },
  {
    path: "jquery-landing-page",
    component: JqueryLandingPageComponent,
    data: { animation: "LandingPage" }
  },

  /*************************************************************
                            Modules
  *************************************************************/
  /*************************************************************
                            Languages
  *************************************************************/
  {
    path: "html",
    loadChildren: "./modules/languages/html/html.module#HtmlModule",
    data: { animation: "ModulePage" }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
