import React from 'react'
import './App.css'
import { HeaderBar } from './HeaderBar'
import { WeightsIndex } from './WeightsIndex'
import { Form } from './Form'
import Login from './Login'
import { BrowserRouter as Router, Switch, Link } from 'react-router-dom'
import { Auth } from './Auth'
import { NoAuth } from 'NoAuth'

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
            <NoAuth path="/login" component={Login} />
            <Auth exact path="/" component={WeightsIndex} />
            <Auth path="/form" component={Form} />
          </Switch>
        </div>
      </Router>
    </div>
  )
}
