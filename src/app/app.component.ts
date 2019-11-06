import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { GameState } from './store/store.model';
import { hoverTakeButton, takeSticks } from './store/actions';
import { getStickCount, getHoveredCount, isPlayerActive } from './store/selectors';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public sticks$: Observable<number> = new Observable<number>();
  public sticksHovered$: Observable<number> = new Observable<number>();
  public isPlayerActive$: Observable<boolean> = new Observable<boolean>();

  constructor(
    private store: Store<GameState>
  ) {
    this.sticks$ = this.store.select(getStickCount);
    this.sticksHovered$ = this.store.select(getHoveredCount);
    this.isPlayerActive$ = this.store.select(isPlayerActive);
  }

  onChangeHover(count: number) {
    this.store.dispatch(hoverTakeButton({count}))
  }

  onTakeSticks(count: number) {
    this.store.dispatch(takeSticks({count}));
  }
}
