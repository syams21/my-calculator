import './App.css'
import { useState } from 'react';

function App() {
    const [calc, setCalc] = useState("");
    const [result, setResult] = useState("");

    const operators = ['/', '*', '+', '-', '.', '%'];

    const isOperator = (value) => {
        return operators.includes(value);
    }

    const updateCalc = (value) => {
        if (
            (operators.includes(value) && calc === '') ||
            (operators.includes(value) && operators.includes(calc.slice(-1)))
        ) {
            return;
        }

        if (!operators.includes(value)) {
            setResult(eval(calc + value).toString());
        }

        if (value === '*') {
            setCalc(calc + '×');
        } else {
            setCalc(calc + value);
        }

        if (value === '%') {
            setCalc((eval(calc) / 100).toString());
            setResult("");
        } else {
            setCalc(calc + value);
    
            if (!operators.includes(value)) {
                setResult(eval(calc + value).toString());
            }
        }
        
    }

    const calculate = () => {
        setCalc(eval(calc).toString());
        setResult("");
    }

    const deleteLast = () => {
        if (calc === '') {
            return;
        }

        const value = calc.slice(0, -1);
        setCalc(value);
    }

    const clearAll = () => {
        setCalc("");
        setResult("");
    }

    return (
        <div className='main-wrapper p-3 rounded'>
            <h2 className='text-light mt-2'>Calculator</h2>
            <div className='display text-light text-end mb-4 mt-3 p-3'>
                <div className="display-input d-flex justify-content-end">
                    {calc
                        ? calc.split(/([+\-*/%])/).map((part, index) => (
                            isOperator(part) ? (
                                <span key={index} className="operator">{part === '*' ? '×' : part}</span>
                            ) : (
                                <span key={index}>{part}</span>
                            )
                        )
                    ) : ""}
                    <br />
                </div>

                <div>
                    {result ? <span>{result}</span> : (<div>&nbsp;</div>)}
                </div>
            </div>

            <div className='keypad d-flex flex-column gap-1'>
                <div className='col d-flex gap-1'>
                    <button onClick={clearAll} className='operator-button clear-button'>C</button>
                    <button onClick={deleteLast} className='operator-button'>{'<'}</button>
                    <button onClick={() => updateCalc('%')} className='operator-button'>%</button>
                    <button onClick={() => updateCalc('/')} className='operator-button'>/</button>
                </div>
                    
                <div className='col d-flex gap-1'>
                    <button onClick={() => updateCalc('7')}>7</button>
                    <button onClick={() => updateCalc('8')}>8</button>
                    <button onClick={() => updateCalc('9')}>9</button>
                    <button onClick={() => updateCalc('*')} className='operator-button'>×</button>
                </div>

                <div className='col d-flex gap-1'>
                    <button onClick={() => updateCalc('4')}>4</button>
                    <button onClick={() => updateCalc('5')}>5</button>
                    <button onClick={() => updateCalc('6')}>6</button>
                    <button onClick={() => updateCalc('-')} className='operator-button'>-</button>
                </div>

                <div className='col d-flex gap-1'>
                    <button onClick={() => updateCalc('1')}>1</button>
                    <button onClick={() => updateCalc('2')}>2</button>
                    <button onClick={() => updateCalc('3')}>3</button>
                    <button onClick={() => updateCalc('+')} className='operator-button'>+</button>
                </div>

                <div className='col d-flex gap-1'>
                    <button onClick={() => updateCalc('.')}>.</button>
                    <button onClick={() => updateCalc('0')}>0</button>
                    <button onClick={calculate} className='enter-button flex-grow-1'>=</button>
                </div>    
            </div>
        </div>
    )
}

export default App
