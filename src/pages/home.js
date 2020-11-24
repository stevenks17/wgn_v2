import React from 'react'
import { Feature, OptForm } from '../components'
import { FaqsContainer } from '../containers/faqs'
import { FooterContainer } from '../containers/footer'
import HeaderContainer from '../containers/header'
import { JumbotronContainer } from '../containers/jumbotron'


export default function Home() {
return (
    <> 
        <HeaderContainer>
            <Feature>
                <Feature.Title>All the newest games in one location!</Feature.Title>
                <Feature.SubTitle> Get the latest info from fellow gamers</Feature.SubTitle>
            </Feature>
        <OptForm>
              <OptForm.Input placeholder="Email Address" />
              <OptForm.Button> Try it now </OptForm.Button>
              <OptForm.Break />
              <OptForm.Text> Get notifications for the most popular titles </OptForm.Text>
          </OptForm>
        </HeaderContainer >
            <JumbotronContainer />
            <FaqsContainer />
            <FooterContainer />
    
    </>
 )
}