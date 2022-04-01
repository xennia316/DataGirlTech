import React, { useState } from 'react'
import './counter.css'

const Counter = () => {

  const [count, setCount] = useState(0);

  // const clickMe = () =>{
  //   let count;
  //   let number = document.getElementsByClassName('num');
  //   let btn = document.getElementsByClassName('btn');
  //   if(btn.innerText === 'Increase'){
  //     number.innerText++
  //   }
  //   else if(btn.innerText === 'Reset'){

  //   }
  // }

  //event.target.className.remove('woo')
  const handleButton = (event) => {
    if (event.target.className === 'plus') { 
      setCount(count + 1); 
    }
    else if( event.target.className === 'minus'){
      setCount(count - 1);
    }
    else if (event.target.className === 'reset'){
      setCount(0);
    }
  }

  return (
    <>
      <div className='body'>
        <h1>Simple Counter</h1>
        <h1 className='num'>{count}</h1>
        <button onClick={handleButton} className='plus'>Increase</button> <button onClick={handleButton} className='reset'>Reset</button> <button onClick={handleButton} className='minus'>Decrease</button>
      </div>
    </>
  )
}

export default Counter