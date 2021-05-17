import { INVALID_MOVE } from 'boardgame.io/core';


//Define the Battleship Position in here in 2D arrays
//Battleship placed here, can hold more than one for expandability
// <!!!!!!!!!!   Battleships here      !!!!!!!!!!!!!!>
const battleships = [[11,12,13,14,15,16], [1,2,3,4,5]];

//Function that has the Game ending logic wherein the Battleship locations are being checked
function IsVictory(cells) {
    const isBattleshipFound = ship => {
      const symbols = ship.map(i => cells[i]);
      return symbols.every(i => i !== null && i === "Hit");
    };
    return battleships.map(isBattleshipFound).every(i => i === true);
}
  
  // Return true if all Cells are occupied (Extension for multi player later on )
function IsDraw(cells) {
    return cells.filter(c => c === null).length === 0;
}


export const Battleship = {
    //Define a 10x10 Board
    setup: () => ({ cells: Array(100).fill(null) }),

    //moveLimit defines when the player change turn, here defined 100 for single player to take as many turns as board
    // Value of 1 will enable taking turns
    turn :{
      moveLimit: 100
    },

    //Moves defines the logic corresponding to element turns
    //Enclosing the clickCell function, that handles the Cell Click Logic
    moves: {
        clickCell: (G, ctx, id) => {
            if (G.cells[id] !== null) {
                return INVALID_MOVE;
              }

            const idMapped = parseInt(id);
            if(battleships.some(ship => ship.includes(idMapped))){
                G.cells[id] = "Hit";
            }
            else{
                G.cells[id] = "Miss";
            }
        }
    },

    //endIf has a isVictory and isDraw functions to check for the winning condition and complete the game when done
    endIf: (G, ctx) => {
        if (IsVictory(G.cells)) {
            return { winner: ctx.currentPlayer };
        }
        if (IsDraw(G.cells)) {
            return { draw: true };
        }
    },
};