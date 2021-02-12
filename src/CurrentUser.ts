import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from './modules/index'

export default function CurrentUser() {
  const currentUser = useSelector((state: RootState) => state.login.currentUser)
  return currentUser
}
