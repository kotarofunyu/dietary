import React from 'react'
import './App.css'
import { HeaderBar } from './HeaderBar'
import { WeightsIndex } from './WeightsIndex'
import { Form } from './Form'
import { Login } from './Login'

function App() {
  return (
    <div className="App">
      <HeaderBar />
      <WeightsIndex />
      <Form />
      <Login />
    </div>
  )
}

export default App
