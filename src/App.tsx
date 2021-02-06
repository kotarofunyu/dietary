import React from 'react'
import './App.css'
import { HeaderBar } from './HeaderBar'
import { WeightsIndex } from './WeightsIndex'
import { TextField, TextareaAutosize, Button, Icon } from '@material-ui/core'

function formatDate(dt: Date): string {
  const y = dt.getFullYear()
  const m = ('00' + (dt.getMonth() + 1)).slice(-2)
  const d = ('00' + dt.getDate()).slice(-2)
  return y + '-' + m + '-' + d
}

function App() {
  return (
    <div className="App">
      <HeaderBar />
      <WeightsIndex />
      <div className="form">
        <TextField label="weight" type="number" />
        <TextField
          label="date"
          type="date"
          defaultValue={formatDate(new Date())}
        />
        <TextareaAutosize rowsMin={3} placeholder="comment" />
        <Button
          variant="contained"
          color="primary"
          // className={classes.button}
          endIcon={<Icon>send</Icon>}
        >
          Send
        </Button>
      </div>
    </div>
  )
}

export default App
