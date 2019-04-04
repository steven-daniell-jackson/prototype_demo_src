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
import { HtmlLandingPageComponent } from "./templates/pages/html-landing-page/html-landing-page.component";
import { CssLandingPageComponent } from "./templates/pages/css-landing-page/css-landing-page.component";
import { BootstrapLandingPageComponent } from "./templates/pages/bootstrap-landing-page/bootstrap-landing-page.component";
import { JavascriptLandingPageComponent } from "./templates/pages/javascript-landing-page/javascript-landing-page.component";
import { PhpLandingPageComponent } from "./templates/pages/php-landing-page/php-landing-page.component";
import { ErrorPageComponent } from './templates/error-page/error-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    HomepageBlocksComponent,
    HeaderComponent,
    FooterComponent,
    HtmlLandingPageComponent,
    CssLandingPageComponent,
    BootstrapLandingPageComponent,
    JavascriptLandingPageComponent,
    PhpLandingPageComponent,
    ErrorPageComponent
  ],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
