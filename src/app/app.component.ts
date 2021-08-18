import { Component, Optional, Self, VERSION } from '@angular/core';
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
  //     this.logger.log('constructor inint');
  //   }
  // }

  /**
   * @constructor: @Self()
   */

  constructor(@Self() private logger: LoggerService) {
    if (this.logger) {
      this.logger.log('constructor inint');
    }
  }
}
