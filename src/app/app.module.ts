import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ParentDirective } from './directives/parent.directive';
import { ChildDirective } from './directives/child.directive';
import { RouterModule, Routes } from '@angular/router';
import { ProvidersComponent } from './providers/providers.component';
import { ResolutionModifiersComponent } from './resolution-modifiers/resolution-modifiers.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { HttpClientModule } from '@angular/common/http';
import { REPORTERS } from './reporter/reporter.token';
import { BrowserReporterService } from './reporter/browser-reporter.service';
import { EngagingReporterService } from './reporter/engaging-reporter.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'resolution-modifiers',
    pathMatch: 'full'
  },
  {
    path: 'resolution-modifiers',
    component: ResolutionModifiersComponent
  },
  {
    path: 'providers',
    component: ProvidersComponent
  }
];

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(routes), HttpClientModule],
  declarations: [
    AppComponent,
    ToolbarComponent,

    ProvidersComponent,

    ResolutionModifiersComponent,
    ParentDirective,
    ChildDirective
  ],
  providers: [
    BrowserReporterService,
    EngagingReporterService,
    { provide: REPORTERS, useExisting: BrowserReporterService, multi: true },
    { provide: REPORTERS, useExisting: EngagingReporterService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
