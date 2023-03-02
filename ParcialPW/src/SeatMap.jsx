import React, { Component } from 'react';


class SeatMap extends Component {
  constructor(props) {
    super(props);

    const { rows = 4, cols = 4 } = props;
    const seats = [];
    for (let row = 1; row <= rows; row++) {
      for (let col = 1; col <= cols; col++) {
        seats.push({ row, col, occupied: false });
      }
    }

    this.state = {
      seats,
    };
  }

  renderSeats() {
    const { seats } = this.state;

    const rows = [];
    let currentRow = 1;
    let currentCol = 1;
    let rowSeats = [];

    seats.forEach((seat) => {
      if (seat.row !== currentRow) {
        rows.push(<tr key={`row-${currentRow}`}>{rowSeats}</tr>);
        currentRow = seat.row;
        currentCol = 1;
        rowSeats = [];
      }

      const className = seat.occupied ? 'occupied' : 'available';
      rowSeats.push(
        <td key={`seat-${seat.row}-${seat.col}`} className={className}>
          {seat.row}-{seat.col}
        </td>
      );
      currentCol++;
    });

    rows.push(<tr key={`row-${currentRow}`}>{rowSeats}</tr>);

    return (
      <table className="seatmap">
        <tbody>{rows}</tbody>
      </table>
    );
  }

  render() {
    return <div>{this.renderSeats()}</div>;
  }
}

export default SeatMap;