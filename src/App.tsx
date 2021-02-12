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
        <Switch>
          <NoAuth path="/login" component={Login} />
          <Auth exact path="/" component={WeightsIndex} />
          <Auth path="/form" component={Form} />
        </Switch>
      </Router>
    </div>
  )
}
