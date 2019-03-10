import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppComponent } from "./app.component";
import { HomepageComponent } from "./pages/homepage/homepage.component";
import { HeaderComponent } from "./parts/common/header/header.component";
import { MainComponent } from "./parts/common/main/main.component";
import { FooterComponent } from "./parts/common/footer/footer.component";
import { DemoHomepageComponent } from "./pages/demo/demo-homepage/demo-homepage.component";
import { DemoHeaderComponent } from './parts/demo/demo-header/demo-header.component';
import { DemoMainComponent } from './parts/demo/demo-main/demo-main.component';
import { DemoSidebarComponent } from './parts/demo/demo-sidebar/demo-sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    DemoHomepageComponent,
    DemoHeaderComponent,
    DemoMainComponent,
    DemoSidebarComponent
  ],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
