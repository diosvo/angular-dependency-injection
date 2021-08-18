import { Component, Optional, VERSION } from '@angular/core';
import { LoggerService } from './logger.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html'
})
export class AppComponent {
  // @Optional()
  /**
   * @description: without injector 'root', the app will build failed
   */

  constructor(@Optional() private logger: LoggerService) {
    if (this.logger) {
      this.logger.log('constructor inint');
    }
  }
}
