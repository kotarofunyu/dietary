import React, { useState } from 'react'
import {
  TextField,
  TextareaAutosize,
  Button,
  Icon,
  CircularProgress,
  // Select,
  MenuItem,
  makeStyles,
  createStyles,
  useTheme,
  Input,
  Chip,
  Theme,
} from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import * as DiaryActions from '../modules/diary'
import StatusAlert from 'components/StatusAlert'
import { useStatus } from 'helpers/useStatus'
import { RootState } from 'modules'
import { Tag } from 'types/Tag'
import Select from 'react-select'

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
  const [selectedTag, setSelectedTag] = useState<number | null>(null)
  const dispatch = useDispatch()
  const [progress, setProgress] = useState(false)
  const [success, error, setStatus] = useStatus()
  const tags: Array<Tag> | null = useSelector(
    (state: RootState) => state.tag.tags,
  )

  const handleDiary = async () => {
    const handleDiaryAction = data
      ? await DiaryActions.editDiary(data.id, weight, date, comment)
      : await DiaryActions.createDiary(weight, date, comment, selectedTag)

    if (handleDiaryAction.error) {
      setStatus('error')
      return
    }

    setStatus('success')
    dispatch(await DiaryActions.getDiaries())
    setOpen(false)
  }

  const handleSubmit = (event: React.MouseEvent<HTMLFormElement>) => {
    event.preventDefault()
    setProgress(true)
    handleDiary()
    setProgress(false)
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
          <select
            onChange={(event) => setSelectedTag(Number(event.target.value))}
          >
            {tags?.map((tag) => {
              return (
                <option value={tag.id} key={tag.id}>
                  {tag.name}
                </option>
              )
            })}
          </select>
        </div>
        <div className="row">
          <Select
            defaultValue={'hoge'}
            isMulti
            name="colors"
            options={[
              { label: 'hoge', value: 'Hoge' },
              { label: 'fuga', value: 'Fuga' },
            ]}
            className="basic-multi-select"
            classNamePrefix="select"
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
          {success && <StatusAlert severity="success" message="投稿しました" />}
          {error && (
            <StatusAlert severity="error" message="エラーが発生しました" />
          )}
        </div>
      </form>
    </div>
  )
}
