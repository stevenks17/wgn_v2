import React from 'react'
import {Link as ReactRouterLink} from 'react-router-dom'
import { Background, ButtonLink, Container, Group, Link, Logo, Feature, Text, FeatureCallOut, Picture, } from './styles/header'

export default function Header({ bg = true, children, ...restProps }) {
    return bg ? (
        <Background data-testid="header-bg" {...restProps}>
          {children}
        </Background>
      ) : (
        children
      );
    }

Header.Feature = function HeaderFeature({children, ...restProps}) {
    return <Feature {...restProps}>{children}</Feature>
}

Header.FeatureCallOut = function HeaderFeatureCallOut({children, ...restProps}) {
    return <FeatureCallOut {...restProps}>{children} </FeatureCallOut>
}

Header.Text = function HeaderText({children, ...restProps}) {
    return <Text {...restProps}>{children} </Text>
}

Header.TextLink = function HeaderTextLink({children, ...restProps}) {
    return <Link {...restProps}>{children} </Link>
}

Header.Frame = function HeaderFrame({children, ...restProps}) {
    return <Container {...restProps}>{children}</Container>
}

Header.Group = function HeaderGroup({children, ...restProps}) {
    return <Group {...restProps}>{children}</Group>
}

Header.ButtonLink = function HeaderButtonLink({children, ...restProps}) {
    return <ButtonLink {...restProps}>{children}</ButtonLink>
}

Header.Logo = function HeaderLogo ({ to, ...restProps}) {
    return (
        <ReactRouterLink to={to}>
            <Logo {...restProps} />
        </ReactRouterLink>
    )
}

Header.Picture = function HeaderPicture({src, ...restProps}) {
    return <Picture {...restProps} src={`/images/users/${src}.png`} />
}