import axios from '../plugins/dietaryAxios'
import { Diary } from '../types/Diary'

const error = 'エラーが発生しました'

export const GET_DIARIES = 'getDiaries'

export async function getDiaries() {
  try {
    const { data } = await axios.get('/weights')

    return {
      type: GET_DIARIES,
      payload: data,
    }
  } catch (e) {
    return {
      type: GET_DIARIES,
      error: true,
      payload: error,
    }
  }
}

type State = {
  diaries: Array<Diary> | null
}

const initialState = {
  diaries: null,
}

export default (state: State = initialState, action): State => {
  if (action.error) {
    return state
  }

  switch (action.type) {
    case GET_DIARIES: {
      return { ...state, diaries: action.payload }
    }
    default:
      return state
  }
}
