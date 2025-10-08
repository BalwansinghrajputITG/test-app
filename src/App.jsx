import { useState } from 'react'
import './index.css'
import Login from './Components/Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Login></Login>
    </>
  )
}

export default App
