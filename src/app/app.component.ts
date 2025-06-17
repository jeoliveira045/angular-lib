import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MkTextBoxComponent} from './components/form/mk-text-box/mk-text-box.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MkTextBoxComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ng-lab-project';
}
