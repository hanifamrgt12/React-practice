import React from 'react'

const firstvariable="wokring"
const secondvariable="testing"

const Concept = () => {
  return (
    <div>
      {/* <h1>I am {firstvariable} {secondvariable}</h1> */}
      {/* below is the template literal syntax */}
      <h1>{`I am ${firstvariable + " " + secondvariable}`}</h1>
    </div>
  )
}

export default Concept
