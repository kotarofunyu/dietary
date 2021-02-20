import { useCurrentUser } from 'helpers/useCurrentUser'
import axios from '../plugins/dietaryAxios'
import { CREATE_DIARY } from './diary'

const error = 'エラーが発生しました'

export const GET_TAGS = 'getTags'
export const CREATE_TAG = 'createTag'

export async function getTags() {
  try {
    const { data } = await axios.get('/tags')

    return {
      type: GET_TAGS,
      error: false,
      payload: data,
    }
  } catch (e) {
    return {
      type: GET_TAGS,
      error: true,
      payload: error,
    }
  }
}

export async function createTag(name: string) {
  try {
    const { data } = await axios.post('/tags', {
      name: name,
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

type Tag = {
  id: number
  name: string
}

type State = {
  tags: Array<Tag> | null
}

const initialState = {
  tags: null,
}

export default (state: State = initialState, action): State => {
  if (action.error) {
    return state
  }

  switch (action.type) {
    case GET_TAGS: {
      return { ...state, tags: action.payload }
    }
    default:
      return state
  }
}
