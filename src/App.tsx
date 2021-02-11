import React from 'react'
import './App.css'
import { HeaderBar } from './HeaderBar'
import { WeightsIndex } from './WeightsIndex'
import { Form } from './Form'
import Login from './Login'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from 'react-router-dom'
import { useSelector } from 'react-redux'
import { RootState } from './modules/index'
import { Auth } from './Auth'

export function App() {
  const hoge = useSelector((state: RootState) => state.login)
  console.log(hoge)
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
            <Route path="/login" component={Login} />
            <Auth>
              <Switch>
                <Route path="/form" component={Form} />
                <Route path="/" component={WeightsIndex} />
                <Redirect from="/" to="/form" />
              </Switch>
            </Auth>
          </Switch>
        </div>
      </Router>
    </div>
  )
}
