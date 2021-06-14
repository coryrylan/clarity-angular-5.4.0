import { Component } from '@angular/core';
import { ClarityIcons, userIcon } from '@cds/core/icon';

ClarityIcons.addIcons(userIcon);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  showAlert = false;
}
