import { Component, Optional, Self, SkipSelf, VERSION } from '@angular/core';
import { LoggerService } from './logger.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  providers: [LoggerService]
})
export class AppComponent {
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
}
