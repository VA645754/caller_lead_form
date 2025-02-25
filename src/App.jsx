import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import DynamicForm from './DynamicForm'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <DynamicForm></DynamicForm>
      </div>
      
    </>
  )
}

export default App
