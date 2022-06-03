import { importExpr } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DataCard } from './data-card.interface';




@Component({
  selector: 'app-card-component',
  templateUrl: './card-component.component.html',
  styleUrls: ['./card-component.component.css']
})
export class CardComponentComponent{
  @Input() dataCard!: DataCard;

  @Output() likeClicked =  new EventEmitter<number>();

  triggerLikeData() {
    this.dataCard.likeTotal++
    this.likeClicked.emit(this.dataCard.likeTotal)
  }

}
