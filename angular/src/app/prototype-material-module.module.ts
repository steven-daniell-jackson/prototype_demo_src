import { NgModule } from '@angular/core';
import {
  MatSidenavModule,
  MatIconModule,
  MatButtonModule
} from '@angular/material';

@NgModule({
  declarations: [],
  imports: [MatSidenavModule, MatIconModule, MatButtonModule],
  exports: [MatSidenavModule, MatIconModule, MatButtonModule]
})
export class PrototypeMaterialModuleModule {}
