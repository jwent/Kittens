import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MediaGalleryComponent } from './media-gallery/media-gallery.component';
import { CheckboxControlValueAccessorDirective } from './checkbox-control-value-accessor.directive';
import { ElementDragDropDirective } from './element-drag-drop.directive';

@NgModule({
  declarations: [
    AppComponent,
    MediaGalleryComponent,
    CheckboxControlValueAccessorDirective,
    ElementDragDropDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  exports: [
    CheckboxControlValueAccessorDirective
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
