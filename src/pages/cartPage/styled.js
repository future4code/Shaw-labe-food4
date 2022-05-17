import styled from 'styled-components';

export const CartContainer = styled.div`
display: flex;
align-items: center;
flex-direction: column;
gap: 30px;
`
export const ContainerAddress = styled.div`
display: flex;
align-items: left;
flex-direction: column;
gap: 10px;
justify-content: center;
background-color: #e5e4e2;
width: 100%;
height: 10vh;
padding: 10px;
`

export const PAddress = styled.p`
color: lightgrey;
font-size: 16px;
font-weight: bold;
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
letter-spacing: 1px;
margin-left: 10px;
gap: 5px;
`

export const Address = styled.p`
color: black;
font-size: 16px;
font-weight: bold;
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
margin-left: 10px;
`

export const ContainerTotal = styled.div`
display: flex;
gap: 300px;
`
export const ContainerH5 = styled.div`
display: flex;
align-items: left;
justify-content: left;
`

export const H5Styled = styled.h5`
color: grey;
`

export const ContainerPrice = styled.div`
display: flex;
align-items: flex-end;
justify-content: center;
flex-direction: column;
width: 60%;
`


export const FormOfPayment = styled.p`
width: 96%;
border-bottom: 2px solid grey;
padding-bottom: 5px;
font-weight: 550;
`
export const FormPayment = styled.form`
display: flex;
align-items: flex-start;
justify-content: center;
flex-direction: column;
width: 96%;
gap: 5px;
`

export const InputStyled = styled.input`
margin-right: 5px;
`

export const LabelStyled = styled.label`
font-weight: bold;
gap: 10px;
`
export const Button = styled.button`
outline: none;
width: 60%;
height: 5vh;
text-decoration: none;
color: black;
background-color: #e8222e;
border: none;
font-weight: bold;
font-size: 14px;
padding: 5px;
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
&&:hover{
    background-color: #d12310;
}
`
