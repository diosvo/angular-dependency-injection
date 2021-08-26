import { Component } from '@angular/core';
import { LoggerService } from '../../logger/logger.service';

@Component({
  selector: 'app-gallery-slide',
  templateUrl: './gallery-slide.component.html'
})
export class GallerySlideComponent {
  constructor(private logger: LoggerService) {}

  ngOnInit(): void {
    this.logger.log('Slide Initialization');
  }
}
