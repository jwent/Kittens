import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
//make service public if you want to bind in template
export class BoxesDbService {
  boxes: Array<{index: number, img: string, checked: boolean}> = [];

  constructor() {    
    for (let i = 0; i < 10; i++) {
      this.boxes.push({index: i, img: "https://placekitten.com/10"+i+"/10"+i, checked: false});
    }
  }
}
