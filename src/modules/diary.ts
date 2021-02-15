import axios from '../plugins/dietaryAxios'
import { Diary } from '../types/Diary'

const error = 'エラーが発生しました'

export const GET_DIARIES = 'getDiaries'
export const CREATE_DIARY = 'createDiary'
export const DELETE_DIARY = 'deleteDiary'

export async function getDiaries() {
  try {
    const { data } = await axios.get('/weights')

    return {
      type: GET_DIARIES,
      error: false,
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

export async function createDiary(
  weight: number,
  date: string,
  comment: string,
) {
  try {
    const { data } = await axios.post('/weights', {
      weight: { weight: weight, date: date, comment: comment },
    })

    return {
      type: CREATE_DIARY,
      error: false,
      payload: data,
    }
  } catch (e) {
    return {
      type: CREATE_DIARY,
      error: true,
      payload: error,
    }
  }
}

export async function deleteDiary(id: number) {
  try {
    const { data } = await axios.delete(`/weights/${id}`)

    return {
      type: DELETE_DIARY,
      error: false,
      payload: data,
    }
  } catch (e) {
    return {
      type: DELETE_DIARY,
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
