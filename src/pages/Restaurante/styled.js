import styled from 'styled-components'

export const MainContainer = styled.div`
    display: flex;
    flex-flow: column;
    align-items: center;
    font-family: 'Roboto', sans-serif;
    position: relative;
    overflow: hidden;
`
export const Local = styled.div`
    display: flex;
    flex-flow: column;
    width: 95%;
    color: #D1D1D6;
    p{
        margin: 5px 15px;
        margin-left: 0;
    }
    .titulo{
        color: #E86E5A;
    }
    div{
        display: flex;
    }
`
export const Banner = styled.div`
    display: flex;
    flex-flow: column;
    align-items: center;
    z-index: 1;
    position: relative;
    width: 100%;
    height: 150px;
    border-radius: 15px 15px 0px 0px;
    background-image: url(${(props) => props.src});
    background-position: center;
    background-size: 100% 100%;
`