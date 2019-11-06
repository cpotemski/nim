import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { defer } from 'rxjs';
import { delay, map, withLatestFrom } from 'rxjs/operators';
import { COMPUTER, MAX_STICKS_PER_ROUND, PLAYER } from '../constants';
import { endGame, restartGame, setActivePlayer, takeSticks } from './actions';
import { getStickCount, isPlayerActive } from './selectors';
import { GameState } from './store.model';

@Injectable()
export class Effects {
  constructor(
    private actions$: Actions,
    private store: Store<GameState>
  ) {}

  calculateCountForComputer(sticks: number): number {
    let count = 1;

    let randomCount = Math.round(Math.random() * Math.min(MAX_STICKS_PER_ROUND, sticks)) || 1;

    switch(sticks) {
      case 13: count = randomCount; break;// if player plays well computer will loose
      case 12: count = 3; break; // computer wins
      case 11: count = 2; break; // computer wins
      case 10: count = 1; break; // computer wins
      case 9: count = 1; break; // if player plays well computer will loose
      case 8: count = 3; break; // computer wins
      case 7: count = 2; break; // computer wins
      case 6: count = 1; break; // computer wins
      case 5: count = 1; break; // if player plays well computer will loose
      case 4: count = 3; break; // computer wins
      case 3: count = 2; break; // computer wins
      case 2: count = 1; break; // computer wins
    }

    return count;
  }

  @Effect({ dispatch: false })
  computerTurn$ = this.actions$.pipe(
    //when data should be loaded
    ofType(takeSticks.type, setActivePlayer.type, restartGame.type),
    //retrieve everything we need from the stores
    withLatestFrom(this.store.select(getStickCount), this.store.select(isPlayerActive)),
    delay(1500),
    //use result and map to new action
    map((([_, sticks, isPlayerActive]) => {
      if(!isPlayerActive && sticks > 1) {
        const count = this.calculateCountForComputer(sticks)
        this.store.dispatch(takeSticks({count}))
      }
    }))
  )

  @Effect()
  startGame$ = defer(() => {
    setTimeout(() => {
      this.store.dispatch(restartGame())
    }, 100)
  })

  @Effect({ dispatch: false })
  checkIfGameEnded$ = this.actions$.pipe(
    ofType(takeSticks.type),
    withLatestFrom(this.store.select(getStickCount), this.store.select(isPlayerActive)),
    map(([_, sticks, isPlayerActive]) => {
      if(sticks < 2) {
        this.store.dispatch(endGame({ winner: isPlayerActive ? COMPUTER : PLAYER }))
      }
    })
  )
}
