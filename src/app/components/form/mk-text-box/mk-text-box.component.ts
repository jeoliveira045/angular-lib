import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'mk-text-box',
  standalone: true,
  imports: [],
  templateUrl: './mk-text-box.component.html',
  styleUrl: './mk-text-box.component.scss'
})
export class MkTextBoxComponent {

  @Input() value: string | null = null

  @Output() valueChange: EventEmitter<any> = new EventEmitter()

  @Input() placeholder!: string

  @Output() onChange: EventEmitter<any> = new EventEmitter()

  _onInputChange(event: any){
    this.value = event.target?.value
    this.valueChange.emit(this.value)
  }

  constructor() {

  }



}
