import React, { useEffect, useState } from 'react'
// import axios from 'axios'
export const Pokemon = () => {
    const [num,setnum]=useState();
    const [name, setname]=useState();
    const [moves, setmoves]=useState();

    // using this useeffect we fetch data according to numebr

    // geting data from api using axios
//     useEffect(()=>{
//       async function getData(){
//         const res=await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`)
//         console.log(res.data.name)
//         setname(res.data.name)
// setmoves(res.data.moves.length)
//       }
//       getData();
//     })

    // getting data from api using fetch
useEffect(()=>{
  async function getData(){
    try{
const res= await fetch(`https://pokeapi.co/api/v2/pokemon/${num}`)
if(!res.ok){
  throw new Error('network was not ok')
}
const data=await res.json()
console.log(res.data)
setname(data.name)
setmoves(data.moves.length)
    }
    catch(error){
console.error("there is problem in  fetch operation",error)
    }
  }
getData()
},[num]

)
  return (
    <>

    {/* concept of restapi / how to change content dynamically */}
    <h1>You have choosed <span style={{color:'red'}}>{num}</span> value</h1>
    <h1>My name is  <span style={{color:'red'}}>{name}</span> </h1>
    <h1>I moves to <span style={{color:'red'}}>{moves}</span> </h1>
     

    <select value={num} name='' id='' onChange={(event)=>{
setnum(event.target.value)
    }}>

    <option  value='1'>1</option>
    <option  value='2'>2</option>
    <option  value='3'>3</option>
    <option value='4'>4</option>

    </select>
    </>
  )
}
