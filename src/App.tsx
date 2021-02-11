import React from 'react'
import './App.css'
import { HeaderBar } from './HeaderBar'
import { WeightsIndex } from './WeightsIndex'
import { Form } from './Form'
import Login from './Login'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

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
