import React,{useState} from 'react'

const FormPage = () => {
    const [text, setText] = useState("Enter text here");
   const handleChange=(event)=>{
console.log("on change")
setText(event.target.value)
   }
   const handleUpClick=()=>{
    console.log("Uppercase clicked");
   let newText=text.toUpperCase();
    setText(newText)
   }
   const handleDownClick=()=>{
    console.log("Lowercase clicked");
   let newText=text.toLowerCase();
    setText(newText)
   }
  return (
    <>
    <div className='container'>
      <div className="mb-3">
        <h1>Analyze the text </h1>
      <textarea className="form-control" id="MyBox" onChange={handleChange} value={text} rows="8"></textarea>
</div>
<button className='btn btn-info mx-1' onClick={handleUpClick}>Convert to Uppercase</button>
<button className='btn btn-info mx-1' onClick={handleDownClick}>Convert to Lowercase</button>
  </div>
  <div className='container'>  
<h1>Summary</h1>
  <p>{text.split(" ").length} words and {text.length}  character </p>
  <p>{0.008 * text.split(" ").length} Mintunes to  read</p>
  <h2>Preview</h2>
  <p>{text}</p>
  </div>
  </>
  )
}

export default FormPage
