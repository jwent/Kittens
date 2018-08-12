import { Component, OnInit, Input, Output, EventEmitter, NgModule, ViewChild } from '@angular/core';
import { Directive, ElementRef, Renderer2, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from './control_value_accessor';
import { BoxesDbService } from '../boxes-db.service';

@Component({
  selector: 'app-media-gallery',
  templateUrl: './media-gallery.component.html',
  styleUrls: ['./media-gallery.component.css']
})

export class MediaGalleryComponent implements OnInit {

  @Input() boxes: Array<{index: number, img: string, checked: boolean}> = [];
  
  @Output() selected: boolean = false;
  
  boxNumber : number = null;
    
  checkedBoxList : Array<{
    id: number,
    position: Array<number>,
    isChecked: boolean
  }>; 
  
  constructor(private _media_service:BoxesDbService) {
  }

  ngOnInit() {
    this.boxes = this._media_service.boxes;
  }

  isChecked(box) {
    return box.checked;
  }

  boxMouseVisible(idx) {
    if (this.boxNumber == idx || this.boxes[idx].checked == true)
      return true;
    else 
      return false;
  }

  boxMouseEnter(idx, elem:ElementRef) {
    console.dir(elem);
    //debugger;
    this.boxNumber = idx;
  }
  
  boxMouseLeave(idx) {
    this.boxNumber = null;
  }

  //dropAllowed = false;
  allowDrop(ev,elem:HTMLElement) {// remove
    //debugger;
    //elem.style = { 'background-color' : 'blue' };
    //elem.setAttribute('style', "{ 'background-color' : 'blue' }" )
    //this.dropAllowed = true;
    ev.preventDefault();
    
  }
/*
  allowDropStyle( ) {
    if (this.dropAllowed) {
      //this.dropAllowed = false;
      return { 'background-color': '#eb005b'  };
    }
    else {
      return { 'background-color': '#fff'  };
    }
  }
*/
  drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  }

  drop(ev) {
    ev.preventDefault();
    let dragFromIdx = ev.dataTransfer.getData("text");
    let dragToIdx = ev.target.getAttribute("id");
    let tempBox = this.boxes[dragToIdx];
    let tempBoxIdx = this.boxes[dragToIdx].index;
    this.boxes[dragToIdx].index = this.boxes[dragFromIdx].index;
    this.boxes[dragToIdx] = this.boxes[dragFromIdx];
    this.boxes[dragFromIdx].index = tempBoxIdx;
    this.boxes[dragFromIdx] = tempBox;
    this._media_service.boxes = this.boxes;
  }

  public resetBoxes() {
    this.boxes.forEach(b => b.checked = false);
  }
}
