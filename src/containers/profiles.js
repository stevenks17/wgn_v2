import React from 'react'
import { Header } from '../components'
import * as ROUTES from '../constants/routes'
import logo from '../logo2.png'

export function SelectProfileContainer({ user, setProfile}) {
    return (
        <>
            <Header bg={false}>
                <Header.Frame>
                    <Header.Logo to={ROUTES.HOME} alt="Which Game Next?" src={logo} />
                </Header.Frame>
            </Header>

            <Profile>
                <Profile.Title> Logged in as </Profile.Title>
                <Profiles.List>
                    <Profiles.User>
                        <Profiles.Picture src={user.photoURL} />
                        <Profiles.Name>{user.displayName}</Profiles.Name>
                    </Profiles.User>
                </Profiles.List>
            </Profile>
        </>
    )
}