import React, { useState } from 'react'
import ModalElement from '@material-ui/core/Modal'
import { createStyles, makeStyles, Theme } from '@material-ui/core'

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
    addIcon: {
      position: 'fixed',
      bottom: '100px',
      right: '100px',
    },
  }),
)

export function Modal({
  component: Component,
  open: open,
  onClose: onClose,
  setOpen: setOpen,
}) {
  const classes = useStyles()
  const [modalStyle] = useState(getModalStyle)

  return (
    <ModalElement open={open} onClose={onClose}>
      <div style={modalStyle} className={classes.paper}>
        <Component setOpen={setOpen} />
      </div>
    </ModalElement>
  )
}
