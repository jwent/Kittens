import { Directive, ElementRef, HostListener } from '@angular/core';
import { BoxesDbService } from './boxes-db.service';

@Directive({
  selector: '[CheckboxControlValueAccessor]',
  exportAs: 'boxes'
})
export class CheckboxControlValueAccessorDirective {
  constructor(private _el: ElementRef, public _boxesService:BoxesDbService ) { }

  ngInInit() {
  }

  @HostListener('change') onChecked() {
    let index = +this._el.nativeElement.id.substr(9);
    let i = this._boxesService.boxes.findIndex(box => { return box.index === index; });
    this._boxesService.boxes[i].checked = !this._boxesService.boxes[i].checked;
  }
}
