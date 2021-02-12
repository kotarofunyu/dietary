import axios from '../plugins/dietaryAxios'

const error = 'エラーが発生しました'

export const LOGIN = 'login'

export const LOGOUT = 'logout'

export async function login(email: string, password: string) {
  try {
    const { data } = await axios.post('/session', {
      email: email,
      password: password,
    })

    return {
      type: LOGIN,
      payload: data,
    }
  } catch (e) {
    return {
      type: LOGIN,
      error: true,
      payload: error,
    }
  }
}

export async function logout() {
  try {
    const { data } = await axios.delete('/session')

    return {
      type: LOGOUT,
      payload: data,
    }
  } catch (e) {
    return {
      type: LOGOUT,
      error: true,
      payload: error,
    }
  }
}

type currentUser = {
  id: number
  name: string
}

type State = {
  currentUser: currentUser | null
}

const initialState = {
  currentUser: null,
}

export default (state: State = initialState, action): State => {
  if (action.error) {
    return state
  }

  switch (action.type) {
    case LOGIN:
    case LOGOUT: {
      return { ...state, currentUser: action.payload.user }
    }
    default:
      return state
  }
}
