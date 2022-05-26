import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card-component',
  templateUrl: './card-component.component.html',
  styleUrls: ['./card-component.component.css']
})
export class CardComponentComponent {

  @Input() index = 0;
  @Input() imagePath = "";
  @Input() age = 0;
  @Input() name = "";
  @Input() company = "";
  @Input() phone = "";
  @Input() address = "";

  @Output() countLike: EventEmitter<number> = new EventEmitter();
  
  counterIndex() {
    this.index++;
    this.countLike.emit(this.index);
  }

}
