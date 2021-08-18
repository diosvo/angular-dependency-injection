import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ResolutionModifier } from './resolution-modifier/resolution-modifier.component';
import { ParentDirective } from './directives/parent.directive';
import { ChildDirective } from './directives/child.directive';

@NgModule({
  imports: [BrowserModule],
  declarations: [
    AppComponent,
    ResolutionModifier,
    ParentDirective,
    ChildDirective
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
