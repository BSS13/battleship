import { Client } from 'boardgame.io/react';
import { Battleship } from './Game';
import { BattleshipBoard } from './Board';

//Set up the Gaming Board and configurations
const App = Client({
  game: Battleship,
  board: BattleshipBoard,
  numPlayers: 1
 });

export default App;