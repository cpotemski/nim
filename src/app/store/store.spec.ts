import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Store } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { Observable, Subscription } from 'rxjs';
import { PLAYER } from '../constants';
import { restartGame, takeSticks } from './actions';
import { Effects } from './effects';
import { RootReducer } from './reducer';
import { initialGameState, initialState } from './store.model';


describe('Effects', () => {
  let actions$: Observable<any>;
  let effects: Effects;

  const subscriptions: Subscription[] = [];

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        Effects,
        provideMockActions(() => actions$),
        provideMockStore({ initialState })
      ]
    });

    effects = TestBed.get(Effects);
    this.store = TestBed.get(Store);
  });

  afterEach(() => {
    subscriptions.forEach(subscription => subscription.unsubscribe())
  })

  it('store should be initialized', (done) => {
    this.store.select(state => state).subscribe(state => {
      expect(state).toEqual(initialState)
      done();
    })
  });

  it('takeSticks should change stickCount', () => {
    const newState = RootReducer(initialGameState, takeSticks({count: 3}))

    expect(newState.sticks).toEqual(initialGameState.sticks - 3)
  });

  it('takeSticks should change isPlayerActive', () => {
    const newState = RootReducer(initialGameState, takeSticks({count: 1}))

    expect(newState.activePlayer).not.toEqual(initialGameState.activePlayer)
  });

  it('after game restart state should be initial', () => {
    const newState = RootReducer({
      ...initialGameState,
      winner: PLAYER,
      sticks: 4,
    }, restartGame())

    expect(newState.sticks).toEqual(initialGameState.sticks)
    expect(newState.winner).toEqual(initialGameState.winner)
  });
});
