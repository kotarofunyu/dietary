import React from 'react'
import { TextField, Button, Icon } from '@material-ui/core'
export function Login() {
  return (
    <div className="login">
      <TextField label="Email" />
      <TextField label="Password" type="password" />
      <Button variant="contained" endIcon={<Icon>Send</Icon>}>
        LOGIN
      </Button>
    </div>
  )
}
