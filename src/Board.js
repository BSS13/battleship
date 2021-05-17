import React from 'react';

export class BattleshipBoard extends React.Component {
  onClick(id) {
    this.props.moves.clickCell(id);
  }

  render() {
    let winner = '';
    if (this.props.ctx.gameover) {
      winner =
        this.props.ctx.gameover.winner !== undefined ? (
          <div id="winner">Game Won! All Battleships Destroyed</div>
        ) : (
          <div id="winner">For Multiplayer Extension</div>
        );
    }

    const cellStyle = {
      border: '1px solid #555',
      width: '50px',
      height: '50px',
      lineHeight: '50px',
      textAlign: 'center',
    };

    let tbody = [];
    for (let i = 0; i < 9; i++) {
      let cells = [];
      for (let j = 0; j < 9; j++) {
        let id = 0;
        let mappedId = 0;
        if(i === 0){
          id = j;
          mappedId = parseInt(id);
        }else{
            id = ""+ i + j;
            mappedId = parseInt(id);
        }
        cells.push(
          <td style={cellStyle} key={mappedId} onClick={() => this.onClick(id)}>
            {this.props.G.cells[id]}
          </td>
        );
      }
      tbody.push(<tr key={i}>{cells}</tr>);
    }

    return (
      <div>
        <table id="board">
          <tbody>{tbody}</tbody>
        </table>
        {winner}
      </div>
    );
  }
}