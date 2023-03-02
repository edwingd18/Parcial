import React, { Component } from 'react';
import SeatMap from './SeatMap';
class SeatSelector extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedSeats: [],
      seatNames: {}
    };

    this.handleSeatSelect = this.handleSeatSelect.bind(this);
    this.handleSeatDeselect = this.handleSeatDeselect.bind(this);
    this.handleSeatNameChange = this.handleSeatNameChange.bind(this);
  }

  handleSeatSelect(row, col) {
    this.setState({
      selectedSeats: [...this.state.selectedSeats, { row, col }]
    });
  }

  handleSeatDeselect(row, col) {
    this.setState({
      selectedSeats: this.state.selectedSeats.filter(
        seat => seat.row !== row || seat.col !== col
      )
    });
  }

  handleSeatNameChange(row, col, name) {
    this.setState({
      seatNames: {
        ...this.state.seatNames,
        [`${row}-${col}`]: name
      }
    });
  }

  render() {
    return (
      <div>
        <h1>Seat Selector</h1>
        <SeatMap
          rows={6}
          cols={6}
          selectedSeats={this.state.selectedSeats}
          seatNames={this.state.seatNames}
          onSeatSelect={this.handleSeatSelect}
          onSeatDeselect={this.handleSeatDeselect}
          onSeatNameChange={this.handleSeatNameChange}
        />
        <p>Selected seats: {JSON.stringify(this.state.selectedSeats)}</p>
        <button onClick={() => console.log('Reserve seats')}>
          Reserve
        </button>
        <button onClick={() => console.log('Deselect seats')}>
          Deselect
        </button>
      </div>
    );
  }
}

export default SeatSelector;