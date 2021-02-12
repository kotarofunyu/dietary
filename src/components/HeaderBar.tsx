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

export function HeaderBar() {
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
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  )
}
