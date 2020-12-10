import React, {useState, useContext} from 'react'
import { useHistory } from 'react-router-dom'
import { FirebaseContext } from '../context/firebase'
import  HeaderContainer  from '../containers/header'
import { FooterContainer } from '../containers/footer'
import { Form } from '../components'
import * as ROUTES from '../constants/routes'

export default function Signup() {
  const history = useHistory()
  const { firebase } = useContext(FirebaseContext)

  const [userName, setUserName] = useState('')
  const [emailAddress, setEmailAddress] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')  

  const isInvalid = userName === ''|| password === '' || emailAddress === ''
  const handleSignup = (event) => {
    event.preventDefault()

    //firebase
  }

  return (
  <>
  <HeaderContainer>
    <Form>
      <Form.Title>Sign Up</Form.Title>
      {error && <Form.Error>{error}</Form.Error>}

      <Form.Base onSubmit={handleSignup} method="POST">
          <Form.Input
          placeholder="Username"
          value={userName}
          onChange={({ target }) => setUserName(target.value)}
        />

      <Form.Input
          placeholder="Email Address"
          value={emailAddress}
          onChange={({ target }) => setEmailAddress(target.value)}
        />

      <Form.Input
          placeholder="Password"
          type="Password"
          value={password}
          autoComplete="off"
          onChange={({ target }) => setPassword(target.value)}
        />

        <Form.Submit disabled={isInvalid} type="submit">
          Sign Up
        </Form.Submit>

        <Form.Text>
          Already a user? <Form.Link to="/signin"> Sign in now.</Form.Link>
        </Form.Text>

        <Form.TextSmall>
          This page is protected by Google reCAPTCHA to ensure you're not a bot.
        </Form.TextSmall>


      </Form.Base>
    </Form>
  </HeaderContainer>
  <FooterContainer />
  
 </>
  )
}