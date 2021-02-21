import React, { useState } from 'react'
import {
  TextField,
  TextareaAutosize,
  Button,
  Icon,
  CircularProgress,
  Select,
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

  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
        maxWidth: 300,
      },
      chips: {
        display: 'flex',
        flexWrap: 'wrap',
      },
      chip: {
        margin: 2,
      },
      noLabel: {
        marginTop: theme.spacing(3),
      },
    }),
  )

  const ITEM_HEIGHT = 48
  const ITEM_PADDING_TOP = 8
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  }

  const names = [
    'Oliver Hansen',
    'Van Henry',
    'April Tucker',
    'Ralph Hubbard',
    'Omar Alexander',
    'Carlos Abbott',
    'Miriam Wagner',
    'Bradley Wilkerson',
    'Virginia Andrews',
    'Kelly Snyder',
  ]

  const chipDelete = (name: string) => {
    setPersonName(personName.filter((value) => value !== name))
  }

  function getStyles(name: string, personName: string[], theme: Theme) {
    return {
      fontWeight:
        personName.indexOf(name) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    }
  }

  const classes = useStyles()
  const theme = useTheme()
  const [personName, setPersonName] = React.useState<string[]>([])

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setPersonName(event.target.value as string[])
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
            labelId="demo-mutiple-chip-label"
            id="demo-mutiple-chip"
            multiple
            value={personName}
            onChange={handleChange}
            input={<Input id="select-multiple-chip" />}
            renderValue={(selected) => (
              <div className={classes.chips}>
                {(selected as string[]).map((value) => (
                  <Chip
                    key={value}
                    onDelete={() => chipDelete(value)}
                    onMouseDown={(event) => event.stopPropagation()}
                    label={value}
                    className={classes.chip}
                  />
                ))}
              </div>
            )}
            MenuProps={MenuProps}
          >
            {names.map((name) => (
              <MenuItem
                key={name}
                value={name}
                style={getStyles(name, personName, theme)}
              >
                {name}
              </MenuItem>
            ))}
          </Select>
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
