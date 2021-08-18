import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ResolutionModifier } from './resolution-modifier/resolution-modifier.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, ResolutionModifier],
  bootstrap: [AppComponent]
})
export class AppModule {}
