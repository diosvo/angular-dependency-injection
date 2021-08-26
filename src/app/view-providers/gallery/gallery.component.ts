import { Component, OnInit } from '@angular/core';
import { LoggerService } from '../../logger/logger.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  viewProviders: [LoggerService]
})
export class GalleryComponent implements OnInit {
  constructor(private logger: LoggerService) {}

  ngOnInit(): void {
    this.logger.log('Gallery Initialization');
  }
}
