import styled from 'styled-components'

export const Background = styled.div`
    display: flex;
    position: fixed;
    z-index: 1;
    overflow: auto;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.5);
`
export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 90%;
    background-color: whitesmoke;
    color: black;
    margin: auto;
    padding: 10px 0;
    button{
        align-self: end;
        padding: 0px 10px;
        margin: 10px;
        border: none;
        background-color: inherit;
        font-family: 'Roboto', sans-serif;
        color: #5AC8FA;
    }
    form{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        input{
            width: 80%;
            padding: 10px;
            margin: 10px;
            border-radius: 5px;
        }
    }
    `