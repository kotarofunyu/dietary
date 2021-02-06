import React from 'react'
import { Weight } from './Weight'
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

const columns = [
  { id: 'id', label: 'id', minWidth: 170 },
  { id: 'date', label: 'date', minWidth: 100 },
  { id: 'weight', label: 'weight', minWidth: 170 },
  { id: 'comment', label: 'comment', minWidth: 170 },
]

const weights: Array<Weight> = [
  {
    id: 1,
    date: '2020-01-01',
    weight: 90,
    comment: '',
  },
  {
    id: 2,
    date: '2020-01-02',
    weight: 91,
    comment: '',
  },
  {
    id: 3,
    date: '2020-01-03',
    weight: 91.2,
    comment: '',
  },
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
  const datas = weights
  const classes = useStyles()
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
              {datas.map((data) => (
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
