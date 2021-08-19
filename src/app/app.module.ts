import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ParentDirective } from './directives/parent.directive';
import { ChildDirective } from './directives/child.directive';
import { RouterModule, Routes } from '@angular/router';
import { ProvidersComponent } from './providers/providers.component';
import { ResolutionModifiersComponent } from './resolution-modifiers/resolution-modifiers.component';

const routes: Routes = [
  {
    path: 'providers',
    component: ProvidersComponent
  },
  {
    path: 'resolution-modifiers',
    component: ResolutionModifiersComponent
  }
];

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  declarations: [
    AppComponent,
    ProvidersComponent,
    ResolutionModifiersComponent,
    ParentDirective,
    ChildDirective
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
