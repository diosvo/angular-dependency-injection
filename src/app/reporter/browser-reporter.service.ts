import { Injectable } from '@angular/core';
import { Reporter } from './reporter';

@Injectable()
export class BrowserReporterService implements Reporter {
  report(): void {
    console.log(`Browser reprt:
    Browser Width - ${window.outerWidth}
    Browser Height - ${window.outerHeight}`);
  }
}
