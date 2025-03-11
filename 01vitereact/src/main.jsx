import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
const anotherElement=(
  <a href="https://reactjs.org">React</a>
)
const AnotherUser="lol"

const reactElement=React.createElement(// function createElement(type,props,children)
  'a',
  {href:"https://reactjs.org",target:'_blank'},
  'React',
  AnotherUser
)
function MyApp(){
  return (
    <>
    <div>

    <h1>Myapp|vite+react</h1>
    </div>
    </>
  )

}
createRoot(document.getElementById('root')).render(
    // <MyApp />
    //anotherElement//it is used as an object
    reactElement
    //<App />
)
