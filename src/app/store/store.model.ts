import { STICKS_COUNT } from '../constants'

export interface MyState {
  game: GameState
}

export interface GameState {
  winner: number,
  activePlayer: number,
  sticks: number,
  sticksHovered: number
}


export const initialGameState: GameState = {
  winner: undefined,
  activePlayer: undefined,
  sticks: STICKS_COUNT,
  sticksHovered: 0
}

export const initialState: MyState = {
  game: initialGameState
}


