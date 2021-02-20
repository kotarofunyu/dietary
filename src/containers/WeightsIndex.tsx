import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../modules/index'
import * as DiaryActions from '../modules/diary'
import StatusAlert from 'components/StatusAlert'
import { Modal } from 'components/Modal'
import { Form } from './Form'

const columns = [
  { id: 'date', label: 'date', minWidth: 80 },
  { id: 'weight', label: 'weight', minWidth: 80 },
  { id: 'tags', label: 'tags', minWidth: 200 },
  { id: 'comment', label: 'comment', minWidth: 200 },
  { id: 'delete', label: 'delete', minWidth: 80 },
]

const useStyles = makeStyles({
  root: {
    width: '80%',
    margin: 'auto',
  },
  container: {
    maxHeight: 440,
  },
})

export function WeightsIndex() {
  const classes = useStyles()
  const diaries = useSelector((state: RootState) => state.diary.diaries)
  const dispatch = useDispatch()
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false)
  const [open, setOpen] = useState(false)
  const [diary, setDiary] = useState({})

  const deleteDiary = async (id) => {
    const deleteDiaryAction = await DiaryActions.deleteDiary(id)
    if (!deleteDiaryAction.error) {
      setError(false)
      setSuccess(true)
      const getDiariesAction = await DiaryActions.getDiaries()
      dispatch(getDiariesAction)
    } else {
      setSuccess(false)
      setError(true)
    }
  }

  const editDiary = () => {
    return (
      <Modal
        component={Form}
        open={open}
        setOpen={setOpen}
        onClose={() => setOpen(false)}
        data={diary}
      />
    )
  }

  return (
    <div>
      <Paper className={classes.root}>
        <TableContainer className={classes.container}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {diaries &&
                diaries.map((diary) => (
                  <TableRow hover key={diary.id} role="checkbox">
                    <TableCell>{diary.date}</TableCell>
                    <TableCell>{diary.weight}</TableCell>
                    <TableCell>
                      <ul>
                        {diary.tags?.map((tag) => {
                          return <li key={tag}>tag</li>
                        })}
                      </ul>
                    </TableCell>
                    <TableCell>{diary.comment}</TableCell>
                    <TableCell>
                      <button
                        onClick={() => {
                          setDiary(diary)
                          setOpen(true)
                        }}
                      >
                        edit
                      </button>
                      <button onClick={() => deleteDiary(diary.id)}>
                        delete
                      </button>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
      {diary && editDiary()}
      {success && <StatusAlert severity="success" message="削除しました" />}
      {error && <StatusAlert severity="error" message="削除できませんでした" />}
    </div>
  )
}
