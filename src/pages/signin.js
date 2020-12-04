import React, {useState} from 'react'
import  HeaderContainer  from '../containers/header'
import { FooterContainer } from '../containers/footer'
import { Form } from '../components'


export default function Signin() {
  const [emailAddress, setEmailAddress] = useState()  
  const [password, setPassword] = useState()  
  const [error, setError] = useState('')  

  // Check for valid form input
  // email and password

  return (
  <>
    <HeaderContainer>
      <Form>
        <Form.Title>Signin</Form.Title>
      </Form>

    </HeaderContainer>
    <FooterContainer /> 
  </>
  )
}