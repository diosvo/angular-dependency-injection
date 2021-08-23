import { Injectable } from '@angular/core';
import { Logger } from './logger';

@Injectable({
  providedIn: 'root'
})
export class LoggerService implements Logger {
  prefix = 'root';

  log(message: string): void {
    console.log(`${this.prefix} - ${message}`);
  }
}
