import React from 'react'


export default function Footer({children, ...restProps}) {
    return <Container {...restProps}>{children}</Container>
}



Footer.Row = function FooterRow({children, ...restProps}) {
    return <Row {...restProps}>{children}</Row>
}