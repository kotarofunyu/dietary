import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import { useCurrentUser } from './useCurrentUser'

export function Auth({ component: Component, ...rest }) {
  const currentUser = useCurrentUser()

  return (
    <Route
      {...rest}
      render={(props) => {
        return currentUser ? <Component {...props} /> : <Redirect to="/login" />
      }}
    ></Route>
  )
}
