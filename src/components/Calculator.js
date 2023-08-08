import React, { useState } from 'react';
import './Calculator.css';
import { operate } from '../logic/operate';

function Calculator() {
  const [displayValue, setDisplayValue] = useState('0');
  const [waitingForOperand, setWaitingForOperand] = useState(false);
  const [operator, setOperator] = useState(null);
  const [storedValue, setStoredValue] = useState(null);

  const handleNumberClick = (buttonValue) => {
    if (waitingForOperand) {
      setDisplayValue(buttonValue);
      setWaitingForOperand(false);
    } else {
      setDisplayValue(prevDisplayValue => (prevDisplayValue === '0' ? buttonValue : prevDisplayValue + buttonValue));
    }
  };

  const handleOperatorClick = (op) => {
    if (operator && !waitingForOperand) {
      const result = operate(storedValue, displayValue, operator);
      setDisplayValue(result);
      setStoredValue(result);
    } else {
      setStoredValue(displayValue);
    }
    setOperator(op);
    setWaitingForOperand(true);
  };

  const handleEqualsClick = () => {
    if (operator) {
      const result = operate(storedValue, displayValue, operator);
      setDisplayValue(result);
      setStoredValue(result);
      setOperator(null);
      setWaitingForOperand(true);
    }
  };

  const handleClearClick = () => {
    setDisplayValue('0');
    setWaitingForOperand(false);
    setOperator(null);
    setStoredValue(null);
  };

  const handlePlusMinusClick = () => {
    setDisplayValue((prevDisplayValue) => (-parseFloat(prevDisplayValue)).toString());
  };

  const handlePercentageClick = () => {
    setDisplayValue((prevDisplayValue) => (parseFloat(prevDisplayValue) / 100).toString());
  };

  return (
    <div className="calculator">
      <div className="display">{displayValue}</div>
      <div className="buttons">
        <div className="button-row">
          <button type="button" className="button function-button" onClick={handleClearClick}>AC</button>
          <button type="button" className="button function-button" onClick={handlePlusMinusClick}>+/-</button>
          <button type="button" className="button function-button" onClick={handlePercentageClick}>%</button>
          <button type="button" className="button operator-button" onClick={() => handleOperatorClick('÷')}>÷</button>
        </div>
        <div className="button-row">
          <button type="button" className="button" onClick={() => handleNumberClick('7')}>7</button>
          <button type="button" className="button" onClick={() => handleNumberClick('8')}>8</button>
          <button type="button" className="button" onClick={() => handleNumberClick('9')}>9</button>
          <button type="button" className="button operator-button" onClick={() => handleOperatorClick('x')}>x</button>
        </div>
        <div className="button-row">
          <button type="button" className="button" onClick={() => handleNumberClick('4')}>4</button>
          <button type="button" className="button" onClick={() => handleNumberClick('5')}>5</button>
          <button type="button" className="button" onClick={() => handleNumberClick('6')}>6</button>
          <button type="button" className="button operator-button" onClick={() => handleOperatorClick('-')}>-</button>
        </div>
        <div className="button-row">
          <button type="button" className="button" onClick={() => handleNumberClick('1')}>1</button>
          <button type="button" className="button" onClick={() => handleNumberClick('2')}>2</button>
          <button type="button" className="button" onClick={() => handleNumberClick('3')}>3</button>
          <button type="button" className="button operator-button" onClick={() => handleOperatorClick('+')}>+</button>
        </div>
        <div className="button-row">
          <button type="button" className="button zero-button" onClick={() => handleNumberClick('0')}>0</button>
          <button type="button" className="button" onClick={() => handleNumberClick('.')}>.</button>
          <button type="button" className="button operator-button" onClick={handleEqualsClick}>=</button>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
