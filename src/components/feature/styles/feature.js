import styled from 'styled-components/macro'


export const Container = styled.div``

export const Title = styled.h1`
    color: white;
    max-width: 640px;
    font-weight: 500;
    margin: auto;

    @media (max-width: 600px) {
        font-size: 35px;
    }
`

export const SubTitle = styled.h2`
    color: white;
    max-width: 640px;
    font-weight: normal;
    margin: auto;

    @media (max-width: 600px) {
        font-size: 26px;
    }
`
