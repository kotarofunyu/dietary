import React from 'react'
import './App.css'
import { HeaderBar } from './HeaderBar'
import { WeightsIndex } from './WeightsIndex'
import { Form } from './Form'
import { Login } from './Login'
import axios from 'axios'

// function getUsers() {
//   axios
//     .get('http://localhost:3200/users', {
//       withCredentials: true,
//       headers: { 'Custom-Header-Element': 'kochandayo' },
//     })
//     .then((response) => {
//       console.log(response)
//     })
//     .catch((error) => {
//       console.log(error)
//     })
// }

function App() {
  return (
    <div className="App">
      <HeaderBar />
      <WeightsIndex />
      <Form />
      <Login />
      {/* <button onClick={getUsers}>get!</button> */}
    </div>
  )
}

export default App
