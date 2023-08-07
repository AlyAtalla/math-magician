import React from 'react';
import './Calculator.css'; // Import your component's CSS file

function Calculator() {
  return (
    <div className="calculator">
      <div className="display">0</div>
      <div className="buttons">
        <div className="button-row">
          <button>7</button>
          <button>8</button>
          <button>9</button>
          <button>÷</button>
        </div>
        <div className="button-row">
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button>x</button>
        </div>
        <div className="button-row">
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>-</button>
        </div>
        <div className="button-row">
          <button>0</button>
          <button>.</button>
          <button>=</button>
          <button>+</button>
        </div>
      </div>
    </div>
  );
}

export default Calculator;