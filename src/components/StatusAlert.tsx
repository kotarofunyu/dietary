import React from 'react'
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert'

function Alert(props: AlertProps) {
  return <MuiAlert elevation={6} variant="filled" {...props} />
}

export default function StatusAlert({ severity: severity, message: message }) {
  return <Alert severity={severity}>{message}</Alert>
}
