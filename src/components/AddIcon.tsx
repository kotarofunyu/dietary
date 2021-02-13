import { Fab } from '@material-ui/core'
import Add from '@material-ui/icons/Add'
import React from 'react'

export function AddIcon(props) {
  return (
    <Fab
      className={props.className}
      color={props.color}
      onClick={props.onClick}
    >
      <Add />
    </Fab>
  )
}
