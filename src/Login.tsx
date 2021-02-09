import React from 'react'
import { TextField, Button, Icon } from '@material-ui/core'
export function Login() {
  const login = (event: React.MouseEvent<HTMLFormElement>) => {
    alert('submitted')
    event.preventDefault()
  }
  return (
    <div className="login">
      <form onSubmit={login}>
        <TextField label="Email" />
        <TextField label="Password" type="password" />
        <Button type="submit" variant="contained" endIcon={<Icon>Send</Icon>}>
          LOGIN
        </Button>
      </form>
    </div>
  )
}
