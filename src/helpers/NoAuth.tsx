import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import { useCurrentUser } from './useCurrentUser'

export function NoAuth({ component: Component, ...rest }) {
  const currentUser = useCurrentUser()

  return (
    <Route
      {...rest}
      render={(props) => {
        return currentUser ? <Redirect to="/" /> : <Component {...props} />
      }}
    ></Route>
  )
}
