import React from 'react'
import { Redirect } from 'react-router-dom'

export function Auth(props) {
  //ToDO props.userは即席的に書いただけなので値を取得できるようにする
  props.user ? props.children : <Redirect to="/login" />
}
