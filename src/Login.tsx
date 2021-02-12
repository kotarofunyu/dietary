import React, { useState } from 'react'
import { TextField, Button, Icon } from '@material-ui/core'
import { connect, useSelector } from 'react-redux'
import * as LoginActions from './modules/login'
import { useHistory } from 'react-router-dom'
import { RootState } from './modules/index'

function Login(props) {
  const currentUser = useSelector((state: RootState) => state.login.currentUser)
  const history = useHistory()

  if (currentUser) {
    history.push('/')
  }

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (event: React.MouseEvent<HTMLFormElement>) => {
    submit(email, password)
    console.log(props)

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
