import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'mk-date-box',
  standalone: true,
  imports: [],
  templateUrl: './mk-date-box.component.html',
  styleUrl: './mk-date-box.component.scss'
})
export class MkDateBoxComponent {
  @Input() value!: string | null

  @Output() valueChange: EventEmitter<any> = new EventEmitter()

  @Input() placeholder!: string | null

  @Output() onChange: EventEmitter<any> = new EventEmitter()

  @Input() format: string

  constructor() {
    this.format = 'dd/MM/yyyy'
    this.format = this.format.replaceAll(/([a-zA-Z]+)/g, ' ')
  }

  _onChange(event: any){
    this.onChange.emit(event)
  }

  _onInputChange(e: any){
    console.log(this.format.split(''))
    this.value = e.target.value
    this.valueChange.emit(this.value)
  }


}
