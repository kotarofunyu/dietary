import React, { useState } from 'react'
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core'
import { ListItemLink } from './ListItemLink'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import {
  Menu,
  ChevronLeft,
  ChevronRight,
  Inbox,
  Mail,
} from '@material-ui/icons'
import { useCurrentUser } from 'helpers/useCurrentUser'
import { useDispatch } from 'react-redux'
import * as AuthActions from '../modules/auth'

const drawerWidth = 240

export function HeaderBar() {
  const currentUser = useCurrentUser()
  const dispatch = useDispatch()
  const [open, setOpen] = useState(false)
  const theme = useTheme()

  const handleClick = async () => {
    const logoutAction = await AuthActions.logout()
    dispatch(logoutAction)
  }

  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
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
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    drawerHeader: {
      display: 'flex',
      alignItems: 'center',
      padding: theme.spacing(0, 1),
      ...theme.mixins.toolbar,
      justifyContent: 'flex-end',
    },
  }))

  const classes = useStyles()

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          {currentUser && (
            <IconButton
              className={classes.menuButton}
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={handleDrawerOpen}
            >
              <Menu />
            </IconButton>
          )}
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
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeft /> : <ChevronRight />}
          </IconButton>
        </div>
        <Divider />
        <List>
          {['記録'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemLink href="/">
                <ListItemIcon>
                  {index % 2 === 0 ? <Inbox /> : <Mail />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemLink>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </div>
  )
}
