import React from 'react'
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { Menu } from '@material-ui/icons'
import CurrentUser from 'helpers/CurrentUser'
import { useDispatch } from 'react-redux'
import * as LogoutAction from '../modules/login'

export function HeaderBar() {
  const currentUser = CurrentUser()
  const dispatch = useDispatch()

  const handleClick = async () => {
    const logoutAction = await LogoutAction.logout()
    dispatch(logoutAction)
  }

  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }))

  const classes = useStyles()

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          className={classes.menuButton}
          edge="start"
          color="inherit"
          aria-label="menu"
        >
          <Menu />
        </IconButton>
        <Typography className={classes.title} variant="h6">
          dietary
        </Typography>
        {currentUser ? (
          <Button color="inherit" onClick={handleClick}>
            ログアウト
          </Button>
        ) : (
          <Button href="/login" color="inherit">
            ログイン
          </Button>
        )}
      </Toolbar>
    </AppBar>
  )
}
