import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[elementDragDrop]'
})
export class ElementDragDropDirective {
  constructor(private _el: ElementRef, private _renderer: Renderer2) { }
  drag_leave_cnt = 0;

  @HostListener('dragover') dragOver() {
    this._renderer.addClass(this._el.nativeElement, 'gallery-drag-target');
  }
  
  @HostListener('dragleave') dragLeave() {
    
    this._renderer.removeClass(this._el.nativeElement, 'gallery-drag-target');
    console.log('dragleave:' + (this.drag_leave_cnt++).toString());
  }

  @HostListener('drop') drop() {
    this._renderer.removeClass(this._el.nativeElement, 'gallery-drag-target');
  }

}
