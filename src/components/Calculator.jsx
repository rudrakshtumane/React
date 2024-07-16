import {useState} from 'react';


const Calculator = () => {
  
    const [input, setInput] = useState('');

    const handleClick = (value) => {
      setInput(input + value);
    };
  
    const handleClear = () => {
      setInput('');
    };
  
    const handleEqual = () => {
      try {
        setInput(eval(input).toString());
      } catch (error) {
        setInput('Error');
      }
    };
    return (
    <>
<div className="card bg-base-100 w-96 shadow-xl mx-[550px] m-10 pt-5 border-4 border-sky-500">
  <figure>
  <div className=" input input-bordered w-full max-w-xs content-center border-2 border-sky-500">{input}</div>
  </figure>
  
  <div className="card-body">
  <div className="grid grid-cols-4 gap-4">

  <button className="btn btn-outline border border-sky-500" onClick={handleClear}>Clear</button>
  <button className="btn btn-outline border border-sky-500" onClick={() => handleClick('+/-')}>+/-</button>
  <button className="btn btn-outline border border-sky-500" onClick={() => handleClick('%')}>%</button>
  <button className="btn btn-outline border border-sky-500" onClick={() => handleClick('/')}>/</button>
  <button className="btn btn-outline border border-sky-500" onClick={() => handleClick('7')}>7</button>
  <button className="btn btn-outline border border-sky-500" onClick={() => handleClick('8')}>8</button>
  <button className="btn btn-outline border border-sky-500" onClick={() => handleClick('9')}>9</button>
  <button className="btn btn-outline border border-sky-500" onClick={() => handleClick('*')}>x</button>
  <button className="btn btn-outline border border-sky-500" onClick={() => handleClick('4')}>4</button>
  <button className="btn btn-outline border border-sky-500" onClick={() => handleClick('5')}>5</button>
  <button className="btn btn-outline border border-sky-500" onClick={() => handleClick('6')}>6</button>
  <button className="btn btn-outline border border-sky-500" onClick={() => handleClick('-')}>-</button>
  <button className="btn btn-outline border border-sky-500" onClick={() => handleClick('1')}>1</button>
  <button className="btn btn-outline border border-sky-500" onClick={() => handleClick('2')}>2</button>
  <button className="btn btn-outline border border-sky-500" onClick={() => handleClick('3')}>3</button>
  <button className="btn btn-outline border border-sky-500" onClick={() => handleClick('+')}>+</button>
  <button className="btn btn-outline border border-sky-500" onClick={() => handleClick('0')}>0</button>
  <button className="btn btn-outline border border-sky-500" onClick={() => handleClick('.')}>.</button>
  <button className="btn btn-outline w-[151px] border border-sky-500" onClick={handleEqual}>=</button>
</div>

  </div>
</div>


      {/* <div className='calculator'>
      <input type="number" className="input input-bordered w-full max-w-xs" onChange={(e) => {setNum1(e.target.value)}}  />
      <input type="number" className="input input-bordered w-full max-w-xs" onChange={(e) => {setNum2(e.target.value)}}   />
      </div> */}
    </>
    )
}

export default Calculator;