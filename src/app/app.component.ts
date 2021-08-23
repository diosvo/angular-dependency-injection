import { HttpClient } from '@angular/common/http';
import {
  Component,
  Injector,
  OnInit,
  Optional,
  Self,
  SkipSelf
} from '@angular/core';
import { AppConfig, APP_CONFIG } from './config.token';
import { ExperimentalLoggerService } from './experimental-logger.service';
import { LoggerLegacy } from './logger-legacy';
import { LoggerService } from './logger.service';

function loggerFactory(
  injector: Injector
): ExperimentalLoggerService | LoggerService {
  return injector.get(APP_CONFIG).experimentalEnabled
    ? injector.get(ExperimentalLoggerService)
    : injector.get(LoggerService);
}

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  providers: [
    {
      provide: LoggerService,
      useFactory: loggerFactory,
      deps: [Injector] // the factory function takes params in exaclty same order as list
    }
  ]
})
export class AppComponent implements OnInit {
  /**
   * @description: [RESOLUTION MODIFIERS]
   */
  /**
   * @constructor: @Optional()
   */
  // constructor(@Optional() private logger: LoggerService) {
  //   if (this.logger) {
  //     this.logger.prefix = '@Optional()';
  //     this.logger.log('constructor init');
  //   }
  // }
  /**
   * @constructor: @Self()
   */
  // constructor(@Self() private logger: LoggerService) {
  //   if (this.logger) {
  //     this.logger.prefix = '@Self()';
  //     this.logger.log('constructor init');
  //   }
  // }
  /**
   * @constructor: @SkipSelf()
   */
  // constructor(
  //   @Self() private logger: LoggerService,
  //   @SkipSelf() private parentLogger: LoggerService
  // ) {
  //   if (this.logger) {
  //     this.logger.prefix = '@Self()';
  //     this.logger.log('constructor init');
  //   }
  //   if (this.parentLogger) {
  //     this.logger.prefix = '@SkipSelf()';
  //     this.logger.log('constructor init');
  //   }
  // }
  /**
   * @description: [PROVIDERS]
   */
  /**
   *  @alias: useClass
   */
  // constructor(private logger: LoggerService) {}

  /**
   *  @alias: useExisting
   */
  constructor(
    private logger: LoggerService,
    private experimentalLogger: ExperimentalLoggerService
  ) {}

  ngOnInit(): void {
    console.log('what is logger:', this.logger);
    this.logger.prefix = 'AppComponent';
    this.logger.log('init');

    // w/o useExisting, the comparision is false
    // console.log(
    //   'is instance the same:',
    //   this.logger === this.experimentalLogger
    // );
  }
}
