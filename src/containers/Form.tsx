import React, { useState } from 'react'
import {
  TextField,
  TextareaAutosize,
  Button,
  Icon,
  Snackbar,
  CircularProgress,
} from '@material-ui/core'
import { useDispatch } from 'react-redux'
import * as DiaryActions from '../modules/diary'
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert'

const formatDate = (dt: Date): string => {
  const y = dt.getFullYear()
  const m = ('00' + (dt.getMonth() + 1)).slice(-2)
  const d = ('00' + dt.getDate()).slice(-2)
  return y + '-' + m + '-' + d
}

export function Form({ setOpen: setOpen }) {
  const [weight, setWeight] = useState(0)
  const [date, setDate] = useState(formatDate(new Date()))
  const [comment, setComment] = useState('')
  const dispatch = useDispatch()
  const [progress, setProgress] = useState(false)
  const [isError, setIsError] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const createDiary = async () => {
    setProgress(true)
    const createDiaryAction = await DiaryActions.createDiary(
      weight,
      date,
      comment,
    )
    dispatch(createDiaryAction)
    if (createDiaryAction.error) {
      setIsError(true)
    } else {
      setIsSuccess(true)
      setOpen(false)
    }
    setProgress(false)
  }

  const handleSubmit = (event: React.MouseEvent<HTMLFormElement>) => {
    createDiary()
    event.preventDefault()
  }

  function Alert(props: AlertProps) {
    return <MuiAlert elevation={6} variant="filled" {...props} />
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
        <div className="progress">{progress && <CircularProgress />}</div>
        <div className="message">
          {isSuccess && <Alert severity="success">投稿しました</Alert>}
          {isError && <Alert severity="error">エラーがありました</Alert>}
        </div>
      </form>
    </div>
  )
}
