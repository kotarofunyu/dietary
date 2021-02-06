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
  TablePagination,
  TableRow,
} from '@material-ui/core'

type TableDataProps = {
  weights: Array<Weight>
}

const columns = [
  { id: 'id', label: 'id', minWidth: 170 },
  { id: 'date', label: 'date', minWidth: 100 },
  { id: 'weight', label: 'weight', minWidth: 170 },
  { id: 'comment', label: 'comment', minWidth: 170 },
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

export function BaseTable(props: TableDataProps) {
  const datas = props.weights
  const classes = useStyles()

  return (
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
            <TableRow hover role="checkbox">
              <TableCell>{datas[0].id}</TableCell>
              <TableCell>{datas[0].date}</TableCell>
              <TableCell>{datas[0].weight}</TableCell>
              <TableCell>{datas[0].comment}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  )
}
