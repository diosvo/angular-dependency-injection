import { HttpClient, HttpClientJsonpModule } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Logger } from './logger';

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
