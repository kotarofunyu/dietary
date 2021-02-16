import { combineReducers } from 'redux'
import { createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import login from './auth'
import diary from './diary'

// ToDo: 現在はログイン中のユーザーのみ保存しているが、他にもstoreで管理する必要が出てきたらwhitelistを追加する
const reducers = {
  login,
  diary,
}

const persistConfig = {
  key: 'currentUser',
  storage,
}
const rootReducer = combineReducers(reducers)
const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(persistedReducer)
export const persistor = persistStore(store)

export type RootState = ReturnType<typeof rootReducer>
