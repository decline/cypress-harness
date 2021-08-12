import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoButtonComponent } from './demo-button/demo-button.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [CommonModule, MatButtonModule],
  declarations: [
    DemoButtonComponent
  ],
  exports: [DemoButtonComponent]
})
export class DemoModule {}
