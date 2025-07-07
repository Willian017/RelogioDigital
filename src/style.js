import styled from 'styled-components'

export const Title = styled.h1 `
    font-family: 'Bahu', sans-serif;
    color: aqua;
    margin: auto 0;
    font-size: 220px;
`

export const Icons = styled.button `
    border: 2px solid aqua;
    width: 40px;
    height: 40px;
    border-radius: 100%;
    margin: 0px 10px;
    background-color: black;
    transition: 0.5s;

    &:hover{
        scale: 1.2;
    }
`