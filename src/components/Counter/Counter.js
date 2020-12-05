import React from 'react';
import './Counter.css';

class Counter extends React.Component {
  handleIncrement = e => {
    console.log('Нажали кнопку +');
    console.log(e.target);
  };

  handleDecrement = e => {
    console.log('Нажали кнопку -');
    console.log(e.target);
  };

  render() {
    return (
      <div className="Counter">
        <span className="Counter__value">0</span>
        <div className="Counter__controls">
          <button type="button" onClick={this.handleIncrement}>
            +1
          </button>
          <button type="button" onClick={this.handleDecrement}>
            -1
          </button>
        </div>
      </div>
    );
  }
}

export default Counter;
