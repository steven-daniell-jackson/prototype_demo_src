import { NgModule } from "@angular/core";
import { SharedSideNavComponent } from "./components/shared-side-nav/shared-side-nav.component";
import { SharedSideNavItemComponent } from "./components/shared-side-nav/shared-side-nav-item/shared-side-nav-item.component";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

@NgModule({
  imports: [CommonModule, RouterModule],
  exports: [SharedSideNavComponent],
  declarations: [SharedSideNavComponent, SharedSideNavItemComponent]
})
export class SharedComponentsModule {}
