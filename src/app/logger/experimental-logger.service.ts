import { Inject, Injectable } from '@angular/core';
import { Reporter } from '../reporter/reporter';
import { REPORTERS } from '../reporter/reporter.token';
import { Logger } from './logger';

@Injectable({
  providedIn: 'root'
})
export class ExperimentalLoggerService implements Logger {
  prefix = 'root';

  constructor(@Inject(REPORTERS) private reporters: ReadonlyArray<Reporter>) {}

  log(message: string): void {
    this.reporters.forEach(r => r.report());
    console.log(`${this.prefix} (experimental) - ${message}`);
  }
}
