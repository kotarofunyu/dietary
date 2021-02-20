import { RootState } from 'modules'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Tag } from 'types/Tag'
import * as tagActions from '../modules/tag'

const tags = [
  {
    name: '減量初期',
  },
  {
    name: 'ハイカーボ',
  },
]

export function TagIndex() {
  const [name, setName] = useState('')
  const [tags, setTags] = useState<Tag[]>([])
  const dispatch = useDispatch()
  const createTag = async () => {
    const createTagAction = await tagActions.createTag(name)

    if (createTagAction.error) {
      return
    }

    alert('success!')
  }

  const getTags = async () => {
    const getTagAction = await tagActions.getTags()

    if (getTagAction.error) {
      return
    }

    dispatch(getTagAction)
    setTags(getTagAction.payload)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    createTag()
  }

  return (
    <div className="tags">
      <div className="index">
        <button onClick={() => getTags()}>get!</button>
        <ul>
          {tags.map((tag) => {
            return <li key="tag">{tag!.name}</li>
          })}
        </ul>
      </div>
      <div className="form">
        <form onSubmit={(event) => handleSubmit(event)}>
          <input
            type="text"
            name="tag"
            id="tag"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
          <button type="submit">送信</button>
        </form>
      </div>
    </div>
  )
}
