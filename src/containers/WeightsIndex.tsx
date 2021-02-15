import React from 'react'
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
import { useSelector } from 'react-redux'
import { RootState } from '../modules/index'
import * as DiaryActions from '../modules/diary'

const columns = [
  { id: 'date', label: 'date', minWidth: 80 },
  { id: 'weight', label: 'weight', minWidth: 80 },
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

  const deleteDiary = async (id) => {
    const deleteDiaryAction = await DiaryActions.deleteDiary(id)
    if (!deleteDiaryAction.error) {
      alert('deleted!')
    }
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
                    <TableCell>{diary.comment}</TableCell>
                    <TableCell>
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
    </div>
  )
}
