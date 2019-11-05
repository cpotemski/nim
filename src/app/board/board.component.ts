import { Component, Input, OnChanges } from '@angular/core';
import { Store } from '@ngrx/store';
import { GameState } from '../store/store.model';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnChanges {
  @Input() sticks: number = 13;
  @Input() sticksHovered: number = 0;

  public countArray = []

  ngOnChanges() {
    this.countArray = Array(this.sticks)
  }

}
