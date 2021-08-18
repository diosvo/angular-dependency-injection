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
  //     this.logger.log('@Optional(): constructor inint');
  //   }
  // }

  /**
   * @constructor: @Self()
   */

  // constructor(@Self() private logger: LoggerService) {
  //   if (this.logger) {
  //     this.logger.log('@Self(): constructor inint');
  //   }
  // }

  /**
   * @constructor: @SkipSelf()
   */

  constructor(
    @Self() private logger: LoggerService,
    @SkipSelf() private parentLogger: LoggerService
  ) {
    if (this.logger) {
      this.logger.log('@Self(): constructor inint');
    }
    if (this.parentLogger) {
      this.logger.log('@SkipSelf(): constructor inint');
    }
  }
}
