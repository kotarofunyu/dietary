import React, { useEffect, useState } from 'react'
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
import * as DiaryActions from '../modules/diary'
import { useDispatch } from 'react-redux'

const columns = [
  { id: 'id', label: 'id', minWidth: 20 },
  { id: 'date', label: 'date', minWidth: 80 },
  { id: 'weight', label: 'weight', minWidth: 80 },
  { id: 'comment', label: 'comment', minWidth: 200 },
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
  const [datas, setData] = useState([
    { id: 0, date: 'loading...', comment: 'loading...', weight: 0 },
  ])
  const classes = useStyles()
  const dispatch = useDispatch()

  const getDiaries = async () => {
    const getDiariesAction = await DiaryActions.getDiaries()
    dispatch(getDiariesAction)
    setData(getDiariesAction.payload)
  }

  useEffect(() => {
    getDiaries()
  }, [])

  return (
    <div>
      <button onClick={getDiaries}>reload</button>
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
              {datas &&
                datas.map((data) => (
                  <TableRow hover key={data.id} role="checkbox">
                    <TableCell>{data.id}</TableCell>
                    <TableCell>{data.date}</TableCell>
                    <TableCell>{data.weight}</TableCell>
                    <TableCell>{data.comment}</TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </div>
  )
}
