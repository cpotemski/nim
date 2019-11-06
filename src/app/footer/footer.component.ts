import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { MAX_STICKS_PER_ROUND, MIN_STICKS_PER_ROUND } from '../constants';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnChanges {
  @Input() disabled: boolean = false;
  @Input() sticks: number;
  @Input() isPlayerActive: boolean = false;
  @Input() winner: number;
  @Output() changeHover: EventEmitter<number> = new EventEmitter<number>();
  @Output() takeSticks: EventEmitter<number> = new EventEmitter<number>();

  public min = MIN_STICKS_PER_ROUND;
  public max = MAX_STICKS_PER_ROUND;
  public countArray = []

  ngOnChanges() {
    this.countArray = []

    if(this.sticks > 1) {
      for(let count = this.min; count <= Math.min(this.max, this.sticks); count++) {
        this.countArray.push(count);
      }
    }
  }

  onChangeHover(count: number) {
    if(!this.disabled) {
      this.changeHover.emit(count);
    }
  }

  onTakeSticks(count: number) {
    if(!this.disabled) {
      this.takeSticks.emit(count);
    }
  }
}
