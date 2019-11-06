import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { PLAYER } from '../constants';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnChanges {
  @Input() sticks: number = 13;
  @Input() sticksHovered: number = 0;
  @Input() winner: number;
  @Output() restartGame: EventEmitter<any> = new EventEmitter();

  public countArray = []

  public PLAYER = PLAYER;

  ngOnChanges() {
    this.countArray = Array(this.sticks)
  }

}
