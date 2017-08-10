import { Component, ChangeDetectionStrategy, Input } from '@angular/core'

@Component({
  selector: 'ui-nav',
  template: `
    <nav class="navbar fixed-top navbar-toggleable-md navbar-light bg-faded">
      <div class="container">
        <div class="row align-items-center">
          <div class="col align-self-start">
            <ul class="navbar-nav">
              <li class="nav-item"
                  *ngFor="let item of items"
                  [routerLinkActiveOptions]="{ exact: true }"
                  routerLinkActive="active">
                <a class="nav-link" [routerLink]="item.link">{{ item.name }}</a>
              </li>
            </ul>
          </div>
          <div class="col-md text-center">
            <a class="navbar-brand" href="#">@ngx-plus/ngx-forms</a>
          </div>
          <div class="col">
            <div class="github-buttons hidden-md-down">
              <iframe allowtransparency="true"
                      scrolling="no"
                      frameborder="0"
                      src="https://buttons.github.io/buttons.html#href=https%3A%2F%2Fgithub.com%2Fngx-plus%2Fngx-forms&amp;aria-label=Star%20ngx-plus%2Fngx-forms%20on%20GitHub&amp;data-text=Star&amp;data-size=large&amp;data-show-count=true"
                      style="width: 120px; height: 30px; line-height: 30px;">
              </iframe>
            </div>
            <ribbon></ribbon>
          </div>
        </div>
      </div>
    </nav>
  `,
  styleUrls: ['./nav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavComponent {

  public themeDropOpen = false

  @Input() items: any[]
  @Input() themes: any[]

  toggleThemeDrop() {
    this.themeDropOpen = !this.themeDropOpen
  }

}
