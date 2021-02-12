import React from 'react'
import './css/App.css'
import { HeaderBar } from './components/HeaderBar'
import { WeightsIndex } from './containers/WeightsIndex'
import { Form } from './containers/Form'
import Login from './containers/Login'
import { BrowserRouter as Router, Switch, Link } from 'react-router-dom'
import { Auth } from './helpers/Auth'
import { NoAuth } from 'helpers/NoAuth'

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
