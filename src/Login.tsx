import React, { useState } from 'react'
import { TextField, Button, Icon } from '@material-ui/core'
import { connect } from 'react-redux'
import * as LoginActions from './modules/login'

function Login(props) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (event: React.MouseEvent<HTMLFormElement>) => {
    submit(email, password)
    console.log(props.login.user)

    event.preventDefault()
  }

  const submit = async (email, password) => {
    const loginAction = await LoginActions.login(email, password)
    props.dispatch(loginAction)
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

export default connect((state) => {
  return state
})(Login)
