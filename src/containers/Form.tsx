import React, { useState } from 'react'
import { TextField, TextareaAutosize, Button, Icon } from '@material-ui/core'
import { useDispatch } from 'react-redux'
import * as DiaryActions from '../modules/diary'

const formatDate = (dt: Date): string => {
  const y = dt.getFullYear()
  const m = ('00' + (dt.getMonth() + 1)).slice(-2)
  const d = ('00' + dt.getDate()).slice(-2)
  return y + '-' + m + '-' + d
}

export function Form() {
  const [weight, setWeight] = useState(0)
  const [date, setDate] = useState(formatDate(new Date()))
  const [comment, setComment] = useState('')
  const dispatch = useDispatch()

  const createDiary = async () => {
    const createDiaryAction = await DiaryActions.createDiary(
      weight,
      date,
      comment,
    )
    dispatch(createDiaryAction)
  }

  const handleSubmit = (event: React.MouseEvent<HTMLFormElement>) => {
    createDiary()
    event.preventDefault()
  }

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="row">
          <TextField
            label="weight"
            type="number"
            value={weight}
            onChange={(e) => setWeight(Number(e.target.value))}
          />
        </div>
        <div className="row">
          <TextField
            label="date"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div className="row">
          <TextareaAutosize
            aria-multiline
            rowsMin={3}
            placeholder="comment"
            onChange={(e) => setComment(e.target.value)}
          />
        </div>
        <div className="row">
          <Button variant="contained" endIcon={<Icon>send</Icon>} type="submit">
            Send
          </Button>
        </div>
      </form>
    </div>
  )
}
