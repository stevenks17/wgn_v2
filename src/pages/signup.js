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

  const isInvalid = password === '' || emailAddress === ''
  const handleSignin = (event) => {
    event.preventDefault()

    //firebase stuff here
    firebase
    .auth()
    .signInWithEmailAndPassword(emailAddress, password)
    .then(() => {
      // push user to browse page
      history.push(ROUTES.BROWSE)
    })
    .catch((error) => {
      setEmailAddress('')
      setPassword('')
      setError(error.message)
    })
  }

  return  (<h1> Hello from the Signup</h1>)

}