import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { catchError, filter, map, switchMap, tap, withLatestFrom, delay } from 'rxjs/operators';
import { of, defer } from 'rxjs';
import { Store } from '@ngrx/store';
import { GameState } from './store.model';
import { setActivePlayer, takeSticks, hoverTakeButton } from './actions';
import { PLAYER, COMPUTER, MAX_STICKS_PER_ROUND} from '../constants';
import { getStickCount, isPlayerActive } from './selectors';

@Injectable()
export class Effects {
  constructor(
    private actions$: Actions,
    private store: Store<GameState>
  ) {}

  @Effect()
  computerTurn$ = this.actions$.pipe(
    //when data should be loaded
    ofType(takeSticks.type, setActivePlayer.type),
    //retrieve everything we need from the stores
    withLatestFrom(this.store.select(getStickCount), this.store.select(isPlayerActive)),
    delay(3000),
    //use result and map to new action
    map((([_, sticks, isPlayerActive]) => {
      console.log(sticks, isPlayerActive)
      if(!isPlayerActive) {
        console.log('computer turn');
        console.log('computer turn ', sticks);
        let count = Math.round(Math.random() * Math.min(MAX_STICKS_PER_ROUND, sticks))
        if(count === 0) {
          count = 1;
        }
        console.log('computer takes', count);

        return takeSticks({count})
      }
      console.log('user ist dran')
      return hoverTakeButton({ count: 0 });
    }))
  )

  @Effect()
  startGame$ = defer(() => {
    const rand = Math.round(Math.random());
    if(rand === 0) {
      this.store.dispatch(setActivePlayer({player: PLAYER}))
    } else {
      this.store.dispatch(setActivePlayer({player: COMPUTER}))
    }
  })
}
