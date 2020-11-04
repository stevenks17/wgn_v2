import styled from 'styled-components/macro'

export const Container = styled.div`
    display: flex;
    border-bottom: 8px solid #222;
    display: flex;
    padding: 70px 45px;
    flex-direction: column;
    max-width: 815px;
    margin: auto;
`

export const Item = styled.div`
    color: white;
    margin-bottom: 10px;
    &:first-of-type {
        margin-top: 3em;
    }
`

export const Header = styled.div`
    display:flex;
    justify-content: space-between;
`

export const Body = styled.div``

export const Frame = styled.div`
    margin-bottom: 40px;

`

export const Inner = styled.div``

export const Title = styled.h1`
    font-size: 50px;
    line-height: 1.1;
    margin-top: 0;
    color: white;
    text-align: center;

    @media (max-width: 600px) {
        font-size: 35px;
    }
`


