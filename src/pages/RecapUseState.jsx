import React, { useState } from 'react'

function RecapUseState() {

    const num = 5
    const [number, setNumber] = useState(4)
    console.log(number);

    const hdlIncrease = () =>{
        console.log('Easy, useState');
    }

  return (
    <div>
        <h1 className='text-8xl'>{number}</h1>
        <br />
        <button className="btn text-white hover:text-purple-700 btn-success" onClick={hdlIncrease}>Increase</button>
        </div>
  )
}

export default RecapUseState