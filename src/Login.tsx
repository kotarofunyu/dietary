import React, { useState } from 'react'
import { TextField, Button, Icon } from '@material-ui/core'
import axios from 'axios'

export function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (event: React.MouseEvent<HTMLFormElement>) => {
    // alert('submitted')
    const options = {
      withCredentials: true,
      headers: {
        'Custom-Header-Element': 'kochandayo',
      },
    }
    axios
      .post(
        'http://localhost:3200/login',
        {
          email: email,
          password: password,
        },
        // { withCredentials: true },
        options,
      )
      .then((response) => {
        console.log(response)
      })
      .catch((error) => {
        console.log(error)
      })
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
