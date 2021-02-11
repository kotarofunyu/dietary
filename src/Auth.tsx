import React from 'react'
import { Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { RootState } from './modules/index'
import { JsxElement } from 'typescript'

export function Auth(props) {
  const currentUser = useSelector((state: RootState) => state.login.currentUser)
  console.log(currentUser)
  // currentUser ? <Redirect to="/login" /> : <Redirect to="/login" />
  // currentUser ? props.children : <Redirect to="/login" />

  if (currentUser) {
    console.log('USER!!')

    return props.children
  } else {
    console.log('no user')

    return <Redirect to="/login" />
  }
}
