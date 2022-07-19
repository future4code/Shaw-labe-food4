import styled from 'styled-components'

export const MainContainer = styled.div`
    display: flex;
    align-items: center;
    width: 90%;
    min-height: 120px;
    background-color: white;
    border: 1px solid #C7C7CC;
    border-radius: 16px;
    margin: 5px 0;
    word-wrap: break-word;
    color: #D1D1D6;
    position: relative;
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
    .remove{
        color: #E86E5A;
        border: 2px solid #E86E5A;
    }
`
export const Conteudo = styled.div`
    display: flex;
    flex-flow: column;
    width: 65%;
`
export const Banner = styled.div`
    display: flex;
    flex-flow: column;
    width: 35%;
    height: 120px;
    border-radius: 15px 0px 0px 15px;
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
    border: 2px solid #8E8E93;
    font-family: 'Roboto', sans-serif;
   
`
export const Quantia = styled.div`
    display: ${(props) => props.mostra === false ? 'none' : 'flex'};
    /* display: flex; */
    flex-flow: column;
    position: absolute;
    right: 0%;
    top: 0%;
    width: 30px;
    height: 25%;
    border-radius: 0px 15px 0px 15px;
    border: 2px solid #E86E5A;
    p{
        color: #E86E5A;
    }
`