import { Component, Output, Input, EventEmitter, OnChanges } from '@angular/core';
import { MIN_STICKS_PER_ROUND, MAX_STICKS_PER_ROUND } from '../constants';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnChanges {
  @Input() disabled: boolean = false;
  @Input() sticks: number;
  @Output() changeHover: EventEmitter<number> = new EventEmitter();
  @Output() takeSticks: EventEmitter<number> = new EventEmitter();

  public min = MIN_STICKS_PER_ROUND;
  public max = MAX_STICKS_PER_ROUND;
  public countArray = []

  ngOnChanges() {
    this.countArray = []

    for(let count = this.min; count <= Math.min(this.max, this.sticks); count++) {
      this.countArray.push(count);
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
