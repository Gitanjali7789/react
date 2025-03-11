import { useState } from 'react'
import './App.css'

function limit(counter){
  if(counter<0){
    return 0
  }
  else if(counter>20){
    return 20
  }
  else{
    return counter
  }
}
function App() {
  let [counter,setCounter]=useState(15)
  const addValue = () => {
    // counter++
    // counter=limit(counter)
    // setCounter(counter)
    //console.log('Counter value:', counter)
    setCounter((prevCounter)=> prevCounter+1)
  }
  const removeValue=()=>{
    counter--
    counter=limit(counter)
    setCounter(counter)
  }
  return (
    <>
      <h1>Counter start</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addValue}>Add value</button><br></br>
      <button onClick={removeValue}>Remove value</button>
    </>
  )
}

export default App
