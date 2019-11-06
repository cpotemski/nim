import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { hoverTakeButton, restartGame, takeSticks } from './store/actions';
import { getHoveredCount, getStickCount, getWinner, isPlayerActive } from './store/selectors';
import { GameState } from './store/store.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public sticks$: Observable<number> = new Observable<number>();
  public sticksHovered$: Observable<number> = new Observable<number>();
  public isPlayerActive$: Observable<boolean> = new Observable<boolean>();
  public winner$: Observable<number> = new Observable<number>();

  constructor(
    private store: Store<GameState>
  ) {
    this.sticks$ = this.store.select(getStickCount);
    this.sticksHovered$ = this.store.select(getHoveredCount);
    this.isPlayerActive$ = this.store.select(isPlayerActive);
    this.winner$ = this.store.select(getWinner);
  }

  onChangeHover(count: number) {
    this.store.dispatch(hoverTakeButton({count}))
  }

  onTakeSticks(count: number) {
    this.store.dispatch(takeSticks({count}));
  }

  onRestartGame() {
    this.store.dispatch(restartGame());
  }
}
