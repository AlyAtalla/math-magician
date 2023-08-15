import calculate from './calculate';

describe('calculate', () => {
  it('resets the calculator object when AC button is pressed', () => {
    const obj = { total: '3', next: '2', operation: '+' };
    const buttonName = 'AC';
    expect(calculate(obj, buttonName)).toEqual({ total: null, next: null, operation: null });
  });

  it('appends "0" to next when buttonName is "0"', () => {
    const obj = { total: '3', next: '2', operation: '+' };
    const buttonName = '0';
    expect(calculate(obj, buttonName)).toEqual({ total: '3', next: '20', operation: '+' });
  });

  it('appends a dot to next when buttonName is "."', () => {
    const obj = { total: '3', next: '2', operation: '+' };
    const buttonName = '.';
    expect(calculate(obj, buttonName)).toEqual({ total: '3', next: '2.', operation: '+' });
  });

  it('performs the calculation when buttonName is "="', () => {
    const obj = { total: '3', next: '2', operation: '+' };
    const buttonName = '=';
    expect(calculate(obj, buttonName)).toEqual({ total: '5', next: null, operation: null });
  });

  it('changes the sign of next when buttonName is "+/-"', () => {
    const obj = { total: '3', next: '2', operation: '+' };
    const buttonName = '+/-';
    expect(calculate(obj, buttonName)).toEqual({ total: '3', next: '-2', operation: '+' });
  });
});
