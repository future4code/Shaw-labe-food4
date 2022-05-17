import styled from "styled-components"

export const MainProfile=styled.main`
display: flex;
flex-direction: column;
width: 100%;

`

export const ContainerCardName =styled.div`
display: flex;
justify-content: space-between;

`
export const CardName =styled.div`
width: 90%;
`
export const ContainerButtonName=styled.div`
width: 10%;
padding-top:16px;
align-items: center;
`
export const ContainerCardAddress =styled.div`
display: flex;
`
export const CardAddress =styled.div`
display: flex;
flex-direction: column;
background-color:#eeeeee ;
width: 90%;
span{
    color:#c7c7cc
}
`
export const ContainerButtonAdress =styled.div`
background-color:#eeeeee ;
width: 10%;
padding-top:20px;
`
export const DivHistory =styled.div`
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;

`

export const Divgrey =styled.div`
border: 0.5px solid #8e8e93;
display: flex;
width: 95%;
margin-bottom: 1em;

`
// component CardOrder
export const ContainerOrderHistory=styled.div`
display: flex;
flex-direction: column;
height: 15vh;
width: 90%;
border: 2px solid #c6c6c6;
border-radius:12px;
`

//Profile eddit page

export const ContainerProfileEddit=styled.main`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width:100%;
min-height: 80vh;
`
export const ProfileEdditForm=styled.form`
display: flex;
flex-direction: column;
align-items: center;
width: 90%;
`
export const PostButton = styled.button`
  width: 100%;
  height: 8vh;
  padding: 12px 16px;
  border-radius: 2px;
  background-color: #e86e5a;
  border: none;
  margin: 2%;
`;

