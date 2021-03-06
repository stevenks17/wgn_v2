import React, { useState,useContext, useEffect } from 'react'
import { SelectProfileContainer } from './profiles'
import { FirebaseContext } from '../context/firebase'
import { Header, Loading } from '../components'
import * as ROUTES from '../constants/routes'
import logo from '../logo2.png'


export function BrowseContainer({ slides }) {
    const [searchTerm, setSearchTerm] = useState('')
    const [profile, setProfile] = useState({})
    const [loading, setLoading] = useState(true)
    const { firebase } = useContext(FirebaseContext)
    const user = firebase.auth().currentUser || {}


    useEffect(() => {
        console.log('profile', profile)
        setTimeout(() => {
            setLoading(false)
        }, 3000)
    }, [profile.displayName])

    return profile.displayName ? (
        <>
        {loading  ? (
        <Loading src={user.photoURL} />
     ) : (
        <Loading.ReleaseBody />
      )}

        <Header src="gamer1" dontShowOnSmallViewPort>

          <Header.Frame>
            <Header.Group>
              <Header.Logo to={ROUTES.HOME} alt="Which Game Next?" src={logo} />
              <Header.TextLink>Series</Header.TextLink>
              <Header.TextLink>Games</Header.TextLink>
            </Header.Group>

            <Header.Group>
              <Header.Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
              <Header.Profile>
              <Header.Picture src={user.photoURL} />
              <Header.Dropdown>
                <Header.Group>
                  <Header.Picture src={user.photoURL} />
                  <Header.TextLink>{user.displayName}</Header.TextLink>
                </Header.Group>
                <Header.Group>
                  <Header.TextLink onClick={() => firebase.auth().signOut()}>Sign out</Header.TextLink>
                </Header.Group>
              </Header.Dropdown>
            </Header.Profile>
          </Header.Group>
        </Header.Frame>


          <Header.Feature>
            <Header.FeatureCallOut>Check Out the Latest Games</Header.FeatureCallOut>
            <Header.Text>lorem ipsum lorem ipsum lorem ipsum lorem ipsum</Header.Text>
          </Header.Feature>
        </Header>
      </>
    ) : (
      <SelectProfileContainer user={user} setProfile={setProfile} 
    /> 
    )
}