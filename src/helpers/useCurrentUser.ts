import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../modules/index'

export const useCurrentUser = () => {
  const currentUser = useSelector((state: RootState) => state.login.currentUser)
  return currentUser
}
