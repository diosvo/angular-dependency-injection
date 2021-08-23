import { Directive, Host } from '@angular/core';
import { LoggerService } from '../logger/logger.service';

@Directive({
  selector: '[appChild]'
})
export class ChildDirective {
  constructor(@Host() private logger: LoggerService) {
    this.logger.prefix = 'Child Directive';
    this.logger.log('directive constructor');
  }
}
