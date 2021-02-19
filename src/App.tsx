import React, { useState } from 'react'
import './css/App.css'
import { HeaderBar } from './components/HeaderBar'
import { Form } from './containers/Form'
import Login from './containers/Login'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import { Auth } from './helpers/Auth'
import { NoAuth } from 'helpers/NoAuth'
import { createStyles, makeStyles } from '@material-ui/core'
import { AddIcon } from './components/AddIcon'
import { useCurrentUser } from 'helpers/useCurrentUser'
import { Modal } from './components/Modal'
import { Top } from 'containers/Top'

const useStyles = makeStyles(() =>
  createStyles({
    addIcon: {
      position: 'fixed',
      bottom: '100px',
      right: '100px',
    },
  }),
)

export function App() {
  const [open, setOpen] = useState(false)
  const classes = useStyles()

  const currentUser = useCurrentUser()

  return (
    <div className="App">
      <HeaderBar />
      <Modal
        component={Form}
        open={open}
        onClose={() => setOpen(false)}
        setOpen={setOpen}
        data={null}
      />
      {currentUser && (
        <AddIcon
          color="primary"
          className={classes.addIcon}
          onClick={() => setOpen(true)}
        />
      )}
      <Router>
        <Switch>
          <NoAuth path="/login" component={Login} />
          <Auth exact path="/" component={Top} />
        </Switch>
      </Router>
    </div>
  )
}
