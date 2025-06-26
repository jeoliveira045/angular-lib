import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MkTextBoxComponent} from './components/form/mk-text-box/mk-text-box.component';
import {MkDateBoxComponent} from './components/form/mk-date-box/mk-date-box.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MkTextBoxComponent, MkDateBoxComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  formData: any = {
    nome: '',
    dataNascimento: ''
  }

  onChange(e: any){
    console.log(e)
  }
}
