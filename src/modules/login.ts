import axios from 'axios'

const error = 'エラーが発生しました'

export const LOGIN = 'login'

export async function login(email: string, password: string) {
  try {
    const { data } = await axios.post(
      'http://localhost:3200/login',
      { email: email, password: password },
      {
        withCredentials: true,
        headers: { 'Custom-Header-Element': 'kochandayo' },
      },
    )

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

const initialState = {
  currentUser: null,
}

export default (state = initialState, action) => {
  if (action.error) {
    return state
  }

  switch (action.type) {
    case LOGIN: {
      return { ...state, currentUser: action.payload.user }
    }
    default:
      return state
  }
}
