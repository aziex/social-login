import { useState } from 'react'
import './App.css'
import SocialLogin from './social-login'
import { Route } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <SocialLogin />
  )
}

export default App
