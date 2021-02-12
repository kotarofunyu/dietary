import React, { useState } from 'react'
import { TextField, Button, Icon } from '@material-ui/core'
import { useDispatch } from 'react-redux'
import * as LoginActions from '../modules/login'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()

  const login = async () => {
    const loginAction = await LoginActions.login(email, password)
    dispatch(loginAction)
  }

  const handleSubmit = (event: React.MouseEvent<HTMLFormElement>) => {
    login()
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
