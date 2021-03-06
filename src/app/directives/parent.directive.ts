import { Directive, Optional, Self } from '@angular/core';
import { LoggerService } from '../logger/logger.service';

@Directive({
  selector: '[appParent]',
  providers: [LoggerService]
})
export class ParentDirective {
  constructor(@Optional() @Self() private logger: LoggerService) {
    if (this.logger) {
      this.logger.prefix = 'Parent Directive';
      this.logger.log('directive constructor');
    }
  }
}
