import {Component, Input} from '@angular/core';

@Component({
  selector: 'mk-text-box',
  standalone: true,
  imports: [],
  templateUrl: './mk-text-box.component.html',
  styleUrl: './mk-text-box.component.scss'
})
export class MkTextBoxComponent {

  @Input() value: string | null = null

  @Input() caption!: string

}
