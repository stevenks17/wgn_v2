import React, {useState, useContext} from 'react'
import { FirebaseContext } from '../context/firebase'
import  HeaderContainer  from '../containers/header'
import { FooterContainer } from '../containers/footer'
import { Form } from '../components'


export default function Signin() {
  const { firebase } = useContext(FirebaseContext)
  const [emailAddress, setEmailAddress] = useState('')  
  const [password, setPassword] = useState('')  
  const [error, setError] = useState('')  

  const isInvalid = password === '' || emailAddress === ''
  const handleSignin = (event) => {
    event.preventDefault()

    //firebase stuff here

  }
  // Check for valid form input
  // email and password

  return (
  <>
    <HeaderContainer>
      <Form>
        <Form.Title>Sign-In</Form.Title>
        {error && <Form.Error>{error}</Form.Error>}

        <Form.Base onSubmit={handleSignin} method="POST">
          <Form.Input
            placeholder="Email Address"
            value={emailAddress}
            onChange={({ target }) => setEmailAddress(target.value)}
        />

        <Form.Input
            type="Password"
            autoComplete="off"
            placeholder="password"
            value={password}
            onChange={({ target }) => setPassword(target.value)}
        />
      <Form.Submit disabled={isInvalid} type="submit">
        Sign In
      </Form.Submit>
        </Form.Base>

        <Form.Text>
          New to WGN? <Form.Link to="/signup">Sign up now.</Form.Link>
        </Form.Text>

        <Form.TextSmall>
          This page is protected by Google reCAPTCHA to ensure you're not a bot.
        </Form.TextSmall>

      </Form>

    </HeaderContainer>
    <FooterContainer /> 
  </>
  )
}