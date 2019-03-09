import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

// Common Pages
import { HomepageComponent } from "./pages/homepage/homepage.component";

const appRoutes: Routes = [{ path: "", component: HomepageComponent }];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
