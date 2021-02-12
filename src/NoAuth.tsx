import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { RootState } from './modules/index'

export function NoAuth({ component: Component, ...rest }) {
  const currentUser = useSelector((state: RootState) => state.login.currentUser)
  console.log(currentUser)

  return (
    <Route
      {...rest}
      render={(props) => {
        return currentUser ? <Redirect to="/" /> : <Component {...props} />
      }}
    ></Route>
  )
}
