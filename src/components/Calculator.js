import React, { useState } from 'react'
import './Calculator.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Calculator() 
{
  const[display, setDisplay] = useState('');
 
  const handleClick = (value) => {
    if (value === '=') {
      try {
        const result = evaluate(display);
        setDisplay(result.toString());
        console.log(result);
        toast.success("Successful calculation");

      } catch (error) {
        toast.error("invalid syntax");
        // setDisplay('Error');
        console.log(error);
      }
    }
    else if(value === 'AC'){
      setDisplay('');
      console.log("value is cleared");
    }

    else if(value === 'DEL')
    {
      setDisplay(display.substring(0, display.length-1));
    }

    else if (value === '.') {
        setDisplay((prevDisplay) => prevDisplay + value);
        console.log("Decimal added");
    }
    else{
      setDisplay((prevDisplay) => prevDisplay + value);
      console.log("value is there")
    } 
  }

  const evaluate = (expression) => {
    const operands = expression.split(/[\^\*\/\%\+/-]/); //matlab ki in operators pe split ho jayega and operands laa dega
    const operators = expression.match(/[\^\*\/\%\+/-]/g); //matlab ki in operators pe match hoga

    let result = parseFloat(operands[0]); //7

    for (let i = 0; i < operators.length; i++) {
      const operator = operators[i]; //operator[0] = +
      const operand = parseFloat(operands[i + 1]); //next operand = 6

      switch (operator) {
        case '+':
          result += operand;
          break;
        case '-':
          result -= operand;
          break;
        case '*':
          result *= operand;
          break;
        case '/':
          result /= operand;
          break;
        case '%':
          result %= operand;
          break;
        case '^':
          result = Math.pow(result, operand);
          break;
        // case '.':
        //   result = parseFloat(result)+ '.'+ parseFloat(operand);
        //   break;
        default:
          throw new Error('Invalid operator');
      }
    }

    return result;
  };


  return (
    <>
    <h1>Calculator</h1>
    <div className="container">
      <div className="calcbox" value={display}>{display}</div>
      <button className="btn" onClick={() => handleClick('AC')}>AC</button>
      <button className="btn"  onClick={() => handleClick('DEL')} >DEL</button>
      <button className="btn" onClick={() => handleClick('%')}>%</button>
      <button className="btn btnspl" onClick={() => handleClick('/')}>÷</button>
      <button className="btn" onClick={() => handleClick('7')}>7</button>
      <button className="btn" onClick={() => handleClick('8')}>8</button>
      <button className="btn"onClick={() => handleClick('9')}>9</button>
      <button className="btn btnspl" onClick={() => handleClick('*')}>*</button>
      <button className="btn" onClick={() => handleClick('4')}>4</button>
      <button className="btn" onClick={() => handleClick('5')}>5</button>
      <button className="btn" onClick={() => handleClick('6')}>6</button>
      <button className="btn btnspl" onClick={() => handleClick('-')}>-</button>
      <button className="btn" onClick={() => handleClick('1')}>1</button>
      <button className="btn" onClick={() => handleClick('2')}>2</button>
      <button className="btn" onClick={() => handleClick('3')}>3</button>
      <button className="btn btnspl" onClick={() => handleClick('+')}>+</button>
      <button className="btn" onClick={() => handleClick('^')}>^</button>
      <button className="btn" onClick={() => handleClick('0')}>0</button>
      <button className="btn" onClick={() => handleClick('.')}>.</button>
      <button className="btn btnsplspl"onClick={() => handleClick('=')}>=</button>
    </div>
    <ToastContainer />
    </> 
  )
}
export default Calculator;