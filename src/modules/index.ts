import { combineReducers } from 'redux'
import { createStore } from 'redux'

import login from './login'

const reducers = {
  login,
}

export const rootReducer = combineReducers(reducers)

export type RootState = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer)
