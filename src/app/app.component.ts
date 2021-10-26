import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
/*
 * Application Overview :
 * `/features` contain the component with application features like search, details page, exhibition.
 * `/layout` contain the stuctural components like header, home page.
 *  services, imported modules, models are shared among application
 */
}
