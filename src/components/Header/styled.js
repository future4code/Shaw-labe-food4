import styled from  'styled-components'

export const MainContainer = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
`
export const Conteudo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 100%;
    border-bottom: 1px solid black;
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    img{
        width: 15px;
        position: absolute;
        left: 5%;
    }
    button{
        position: absolute;
        right: 5%;
        border: none;
        background-color: inherit;
        font-family: 'Roboto', sans-serif;
    }
`