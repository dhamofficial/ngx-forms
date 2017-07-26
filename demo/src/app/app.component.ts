import {Component, ChangeDetectionStrategy} from '@angular/core';
import {ShareButtonsService} from '../../../src';

// import {ShareButtonsService} from './sharebuttons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {

  constructor(private shareService: ShareButtonsService) {
    shareService.twitterAccount = 'MurhafSousli';
  }

}
