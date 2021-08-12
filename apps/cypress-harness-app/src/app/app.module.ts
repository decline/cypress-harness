import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DemoModule } from '@cypress-harness/demo';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, DemoModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
