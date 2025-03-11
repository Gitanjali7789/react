import { useState } from 'react'

import Card from './components/card'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  let myObject={
    name: "John",
    age: 30
  }
  let arr=[1,2,3,4,5]

  return (
    <>
      <h1 className='bg-green-900 rounded-xl mb-4 '>Tailwind test</h1>
      <Card username="lol"/>
      <Card username="haha" btnText="visit"/>
    </>
  )
}

export default App
