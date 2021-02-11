import React from 'react'
import './App.css'
import { HeaderBar } from './HeaderBar'
import { WeightsIndex } from './WeightsIndex'
import { Form } from './Form'
import { Login } from './Login'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

// import axios from 'axios'

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

export function App() {
  return (
    <div className="App">
      <HeaderBar />
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">weights</Link>
              </li>
              <li>
                <Link to="/form">form</Link>
              </li>
              <li>
                <Link to="/login">login</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path="/form">
              <Form />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/">
              <WeightsIndex />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  )
}
