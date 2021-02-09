import React, { useState } from 'react'
import { TextField, Button, Icon } from '@material-ui/core'
export function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (event: React.MouseEvent<HTMLFormElement>) => {
    alert('submitted')
    event.preventDefault()
  }
  return (
    <div className="login">
      <form onSubmit={handleSubmit}>
        <TextField
          label="Email"
          type="email"
          name="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <TextField
          label="Password"
          type="password"
          name="email"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <Button type="submit" variant="contained" endIcon={<Icon>Send</Icon>}>
          LOGIN
        </Button>
      </form>
    </div>
  )
}
