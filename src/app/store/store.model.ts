import { STICKS_COUNT, PLAYER, COMPUTER } from '../constants'

export interface MyState {
  game: GameState
}

export interface GameState {
  activePlayer: number,
  sticks: number,
  sticksHovered: number
}


export const initialGameState: GameState = {
  activePlayer: undefined,
  sticks: STICKS_COUNT,
  sticksHovered: 0
}

export const initialState: MyState = {
  game: initialGameState
}


