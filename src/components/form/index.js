import React from 'react'
import { Container, Base, Error, Title, Text, SmallText, Link, Input, Submit} from './styles/form'

export default function Form({children, ...restProps}) {
    return <Container {...restProps}>{children}</Container>
}