import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import CurrentUser from './CurrentUser'

export function NoAuth({ component: Component, ...rest }) {
  const currentUser = CurrentUser()

  return (
    <Route
      {...rest}
      render={(props) => {
        return currentUser ? <Redirect to="/" /> : <Component {...props} />
      }}
    ></Route>
  )
}
