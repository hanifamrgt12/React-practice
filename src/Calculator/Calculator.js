import React, { useState } from 'react'
import './Calculator.css'
const Calculator = () => {

    const [Result, setResult]=useState("");

    const clickHandler=(e)=>{
setResult(Result.concat(e.target.value))
    }

    const Cleardisplay=()=>{
setResult("")
    }

    const Calculate=()=>{
        setResult(eval(Result).toString())
    }
  return (
   <>
   <div className='calc'>
    <input type='text' placeholder='0' id='answer' value={Result}/>

    <input type="button" value="9" className='button' onClick={clickHandler}/>
    <input type="button" value="8" className='button' onClick={clickHandler}/>
    <input type="button" value="7" className='button' onClick={clickHandler}/>
    <input type="button" value="6" className='button' onClick={clickHandler}/>
    <input type="button" value="5" className='button' onClick={clickHandler}/>
    <input type="button" value="4" className='button' onClick={clickHandler}/>
    <input type="button" value="3" className='button' onClick={clickHandler}/>
    <input type="button" value="2" className='button' onClick={clickHandler}/>
    <input type="button" value="1" className='button' onClick={clickHandler}/>
   
    <input type="button" value="0" className='button' onClick={clickHandler}/>
    <input type="button" value="+" className='button' onClick={clickHandler}/>
    <input type="button" value="-" className='button' onClick={clickHandler}/>
    <input type="button" value="*" className='button' onClick={clickHandler}/>
    <input type="button" value="/" className='button' onClick={clickHandler}/>
    <input type="button" value="%" className='button' onClick={clickHandler}/>
    <input type="button" value="." className='button' onClick={clickHandler}/>

    <input type="button" value="Clear" className='button button1' onClick={Cleardisplay}/>
    <input type="button" value="=" className='button button1' onClick={Calculate}/>



   </div>
   </>
  )
}

export default Calculator
