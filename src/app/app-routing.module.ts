import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

// Common Pages
import { HomepageComponent } from "./pages/homepage/homepage.component";
import { DemoHomepageComponent } from "./pages/demo/demo-homepage/demo-homepage.component";

const appRoutes: Routes = [
  { path: "", component: HomepageComponent, data: { state: "home" } },
  {
    path: "demo",
    component: DemoHomepageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
