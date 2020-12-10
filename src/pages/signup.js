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

  return  <HeaderContainer>
    <Form>
      <Form.Title>Sign Up</Form.Title>
      {error && <Form.Error>{error}</Form.Error>}
    </Form>
  </HeaderContainer>

}