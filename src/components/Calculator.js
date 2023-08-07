import React from 'react';
import './Calculator.css';

function Calculator() {
  const handleClick = (value) => {
    // Handle click logic here
  };

  return (
    <div className="calculator">
      <div className="display">0</div>
      <div className="buttons">
        <div className="button-row">
          <button type="button" className="button" onClick={() => handleClick(7)}>7</button>
          <button type="button" className="button" onClick={() => handleClick(8)}>8</button>
          <button type="button" className="button" onClick={() => handleClick(9)}>9</button>
          <button type="button" className="button" onClick={() => handleClick('÷')}>÷</button>
        </div>
        <div className="button-row">
          <button type="button" className="button" onClick={() => handleClick(4)}>4</button>
          <button type="button" className="button" onClick={() => handleClick(5)}>5</button>
          <button type="button" className="button" onClick={() => handleClick(6)}>6</button>
          <button type="button" className="button" onClick={() => handleClick('x')}>x</button>
        </div>
        <div className="button-row">
          <button type="button" className="button" onClick={() => handleClick(1)}>1</button>
          <button type="button" className="button" onClick={() => handleClick(2)}>2</button>
          <button type="button" className="button" onClick={() => handleClick(3)}>3</button>
          <button type="button" className="button" onClick={() => handleClick('-')}>-</button>
        </div>
        <div className="button-row">
          <button type="button" className="button" onClick={() => handleClick(0)}>0</button>
          <button type="button" className="button" onClick={() => handleClick('.')}>.</button>
          <button type="button" className="button" onClick={() => handleClick('=')}>=</button>
          <button type="button" className="button" onClick={() => handleClick('+')}>+</button>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
