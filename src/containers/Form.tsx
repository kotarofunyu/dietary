import React, { useState } from 'react'
import {
  TextField,
  TextareaAutosize,
  Button,
  Icon,
  CircularProgress,
} from '@material-ui/core'
import { useDispatch } from 'react-redux'
import * as DiaryActions from '../modules/diary'
import StatusAlert from 'components/StatusAlert'

const formatDate = (dt: Date): string => {
  const y = dt.getFullYear()
  const m = ('00' + (dt.getMonth() + 1)).slice(-2)
  const d = ('00' + dt.getDate()).slice(-2)
  return y + '-' + m + '-' + d
}

export function Form({ setOpen: setOpen, data: data }) {
  const [weight, setWeight] = useState(data ? data.weight : 0)
  const [date, setDate] = useState(data ? data.date : formatDate(new Date()))
  const [comment, setComment] = useState(data ? data.comment : '')
  const dispatch = useDispatch()
  const [progress, setProgress] = useState(false)
  const [isError, setIsError] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const createDiary = async () => {
    const createDiaryAction = await DiaryActions.createDiary(
      weight,
      date,
      comment,
    )

    if (createDiaryAction.error) {
      setIsError(true)
    } else {
      setIsSuccess(true)
      const getDiariesAction = await DiaryActions.getDiaries()
      dispatch(getDiariesAction)
      setOpen(false)
    }
  }

  const editDiary = async () => {
    const editDiaryAction = await DiaryActions.editDiary(
      data.id,
      weight,
      date,
      comment,
    )

    if (editDiaryAction.error) {
      setIsError(true)
    } else {
      setIsSuccess(true)
      const getDiariesAction = await DiaryActions.getDiaries()
      dispatch(getDiariesAction)
      setOpen(false)
    }
  }

  const handleSubmit = (event: React.MouseEvent<HTMLFormElement>) => {
    setProgress(true)
    data ? editDiary() : createDiary()
    setProgress(false)
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
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
        </div>
        <div className="row">
          <Button variant="contained" endIcon={<Icon>send</Icon>} type="submit">
            Send
          </Button>
        </div>
        <div className="progress">{progress && <CircularProgress />}</div>
        <div className="message">
          {isSuccess && (
            <StatusAlert severity="success" message="投稿しました" />
          )}
          {isError && (
            <StatusAlert severity="error" message="エラーが発生しました" />
          )}
        </div>
      </form>
    </div>
  )
}
