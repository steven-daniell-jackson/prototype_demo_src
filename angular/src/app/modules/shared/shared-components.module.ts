import { NgModule } from '@angular/core';
import { SharedSideNavComponent } from './components/shared-side-nav/shared-side-nav.component';
import { SharedSideNavItemComponent } from './components/shared-side-nav/shared-side-nav-item/shared-side-nav-item.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PrototypeMaterialModuleModule } from 'src/app/prototype-material-module.module';

@NgModule({
  imports: [CommonModule, RouterModule, PrototypeMaterialModuleModule],
  exports: [SharedSideNavComponent],
  declarations: [SharedSideNavComponent, SharedSideNavItemComponent]
})
export class SharedComponentsModule {}
