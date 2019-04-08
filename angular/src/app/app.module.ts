import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AppRoutingModule } from "./app-routing.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppComponent } from "./app.component";
import { HomepageComponent } from "./templates/homepage/homepage.component";
import { HeaderComponent } from "./templates/layouts/header/header.component";
import { FooterComponent } from "./templates/layouts/footer/footer.component";
import { HomepageBlocksComponent } from "./templates/homepage/homepage-blocks/homepage-card-blocks.component";

import { ErrorPageComponent } from "./templates/error-page/error-page.component";
import { HtmlLandingPageComponent } from "./templates/pages/languages/html-landing-page/html-landing-page.component";
import { CssLandingPageComponent } from "./templates/pages/languages/css-landing-page/css-landing-page.component";
import { BootstrapLandingPageComponent } from "./templates/pages/frameworks/bootstrap-landing-page/bootstrap-landing-page.component";
import { JavascriptLandingPageComponent } from "./templates/pages/languages/javascript-landing-page/javascript-landing-page.component";
import { PhpLandingPageComponent } from "./templates/pages/languages/php-landing-page/php-landing-page.component";
import { LanguagesLandingPageComponent } from "./templates/pages/languages/languages-landing-page.component";
import { FrameworksLandingPageComponent } from "./templates/pages/frameworks/frameworks-landing-page.component";
import { LibrariesLandingPageComponent } from "./templates/pages/libraries/libraries-landing-page.component";
import { OtherLandingPageComponent } from "./templates/pages/other-landing-page/other-landing-page.component";
import { ProjectsLandingPageComponent } from "./templates/pages/projects-landing-page/projects-landing-page.component";
import { CssComponentsLandingPageComponent } from "./templates/pages/languages/css-landing-page/css-components-landing-page/css-components-landing-page.component";
import { SqlLandingPageComponent } from "./templates/pages/languages/sql-landing-page/sql-landing-page.component";
import { JqueryLandingPageComponent } from "./templates/pages/libraries/jquery-landing-page/jquery-landing-page.component";
import { VueLandingPageComponent } from "./templates/pages/frameworks/vue-landing-page/vue-landing-page.component";
import { ReactLandingPageComponent } from "./templates/pages/frameworks/react-landing-page/react-landing-page.component";
import { AngularLandingPageComponent } from "./templates/pages/frameworks/angular-landing-page/angular-landing-page.component";
import { NodejsLandingPageComponent } from "./templates/pages/other-landing-page/nodejs-landing-page/nodejs-landing-page.component";
import { AngularjsLandingPageComponent } from "./templates/pages/frameworks/angularjs-landing-page/angularjs-landing-page.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomepageBlocksComponent,
    HomepageComponent,
    FooterComponent,
    ErrorPageComponent,
    HtmlLandingPageComponent,
    CssLandingPageComponent,
    BootstrapLandingPageComponent,
    JavascriptLandingPageComponent,
    PhpLandingPageComponent,
    SqlLandingPageComponent,
    JqueryLandingPageComponent,
    LanguagesLandingPageComponent,
    FrameworksLandingPageComponent,
    LibrariesLandingPageComponent,
    OtherLandingPageComponent,
    ProjectsLandingPageComponent,
    VueLandingPageComponent,
    ReactLandingPageComponent,
    AngularLandingPageComponent,
    NodejsLandingPageComponent,
    AngularjsLandingPageComponent,
    CssComponentsLandingPageComponent
  ],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
