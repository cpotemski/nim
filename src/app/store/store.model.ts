import { STICKS_COUNT } from '../constants'
import { PlayersEnum } from '../models/players.enum'

export interface MyState {
  game: GameState
}

export interface GameState {
  activePlayer: PlayersEnum
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


