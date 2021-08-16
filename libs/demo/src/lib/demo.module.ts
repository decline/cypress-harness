import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoButtonComponent } from './demo-button/demo-button.component';
import { MatButtonModule } from '@angular/material/button';
import { HeaderComponent } from './header/header.component';

@NgModule({
  imports: [CommonModule, MatButtonModule],
  declarations: [
    HeaderComponent,
    DemoButtonComponent
  ],
  exports: [HeaderComponent, DemoButtonComponent]
})
export class DemoModule {}
