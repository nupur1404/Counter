import React, { useState } from 'react'

const Counter = () => {

    const [val,setval] = useState('0')

    const IncremenetHandler = () =>{
        setval(eval(val+1))
    }
    const DecrementHandler =() =>{
        setval(eval(val-1))
    }
  return (
    <div className='counter'>
      <h1> Counter App</h1>
      <div className='display'>
        <div>
            <button onClick={DecrementHandler}>-</button>
        </div>
        <div>
            <h2>{val} </h2>
        </div>
        <div>
            <button onClick={IncremenetHandler}>+</button>
        </div>
      </div>
      <button className='reset' onClick={()=>{setval(0)}}>RESET</button>
    </div>
  )
}

export default Counter
