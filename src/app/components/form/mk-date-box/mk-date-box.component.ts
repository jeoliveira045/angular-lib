import {AfterContentChecked, AfterContentInit, Component, EventEmitter, Input, Output} from '@angular/core';
import {NgxMaskDirective, provideNgxMask} from "ngx-mask";

@Component({
  selector: 'mk-date-box',
  standalone: true,
  imports: [
    NgxMaskDirective
  ],
  providers: [
      provideNgxMask()
  ],
  templateUrl: './mk-date-box.component.html',
  styleUrl: './mk-date-box.component.scss'
})
export class MkDateBoxComponent{
  @Input() value!: string | null

  @Output() valueChange: EventEmitter<any> = new EventEmitter()

  @Input() placeholder!: string | null

  @Output() onChange: EventEmitter<any> = new EventEmitter()

  @Input({required: true}) mask!: string

  constructor() {

  }

  _onChange(event: any){
    this.onChange.emit(event)
  }

  _onInputChange(e: any){
    this.value = e.target.value
    this.valueChange.emit(this.value)
  }


}
