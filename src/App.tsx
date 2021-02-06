import React from 'react'
import './App.css'
import { HeaderBar } from './HeaderBar'
import { WeightsIndex } from './WeightsIndex'
import { Form } from './Form'

function App() {
  return (
    <div className="App">
      <HeaderBar />
      <WeightsIndex />
      <Form />
    </div>
  )
}

export default App
