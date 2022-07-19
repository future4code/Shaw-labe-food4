import styled from 'styled-components'

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 99%;
    max-width: px;
    /* max-height: 250px; */
    background-color: white;
    border: 0.8px solid #C7C7CC;
    border-radius: 16px;
    margin: 6px 0;
    word-wrap: break-word;
    color: #D1D1D6;
    /* position: relative; */
    p{
        margin: 4px 0px;
        margin-left: 10px;
    }
    .titulo{
        color: #E86E5A;
    }
    .preco{
        color: black;
    }
`
export const Conteudo = styled.div`
    display: flex;
    flex-flow: column;
    width: 100%;
`
export const Banner = styled.div`
    display: flex;
    flex-flow: column;
    width: 100%;
    height: 120px;
    border-radius: 16px 16px 0px 0px;
    background-image: url(${(props) => props.src});
    background-position: center;
    background-size: cover;
`
export const Botao = styled.button`
    display: flex;
    flex-flow: column;
    align-self: flex-end;
    position: absolute;
    right: 0%;
    border-radius: 15px 0px 15px 0px;
    border: 1px solid black;
    font-family: 'Roboto', sans-serif;
`