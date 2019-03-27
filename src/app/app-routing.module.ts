import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomepageComponent } from "./templates/layouts/homepage/homepage.component";

const routes: Routes = [
  {
    path: "",
    component: HomepageComponent,
    pathMatch: "full",
    data: { animation: "HomePage" }
  },
  {
    path: "html",
    loadChildren: "./modules/html/html.module#HtmlModule",
    data: { animation: "ModulePage" }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
