import React, { useState } from 'react'
import './css/App.css'
import { HeaderBar } from './components/HeaderBar'
import { WeightsIndex } from './containers/WeightsIndex'
import { Form } from './containers/Form'
import Login from './containers/Login'
import { BrowserRouter as Router, Switch, Link } from 'react-router-dom'
import { Auth } from './helpers/Auth'
import { NoAuth } from 'helpers/NoAuth'
import { createStyles, makeStyles, Modal, Theme } from '@material-ui/core'

function rand() {
  return Math.round(Math.random() * 20) - 10
}

function getModalStyle() {
  const top = 50 + rand()
  const left = 50 + rand()

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  }
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }),
)

export function App() {
  const [open, setOpen] = useState(false)
  const classes = useStyles()

  const [modalStyle] = useState(getModalStyle)

  return (
    <div className="App">
      <HeaderBar />
      <button onClick={() => setOpen(true)}>open modal</button>
      <Modal open={open} onClose={() => setOpen(false)}>
        <div style={modalStyle} className={classes.paper}>
          <Form />
        </div>
      </Modal>
      <Router>
        <Switch>
          <NoAuth path="/login" component={Login} />
          <Auth exact path="/" component={WeightsIndex} />
          <Auth path="/form" component={Form} />
        </Switch>
      </Router>
    </div>
  )
}
