import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Logger } from './logger/logger';

@Injectable({
  providedIn: 'root'
})
export class ExperimentalLoggerService implements Logger {
  prefix = 'root';

  constructor(private http: HttpClient) {}

  log(message: string): void {
    console.log(`${this.prefix} (experimental) - ${message}`);
  }
}
