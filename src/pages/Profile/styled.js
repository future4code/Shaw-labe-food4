import styled from "styled-components"

export const MainProfile=styled.main`
display: flex;
flex-direction: column;
width: 100%;
margin-bottom: 60px;

`

export const ContainerCardName =styled.div`
display: flex;
justify-content: space-between;

`
export const CardName =styled.div`
width: 90%;
padding-left: 1em;
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
padding-left:1em;
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
export const Orderhistory =styled.p`
width: 96%;
border-bottom: 2px solid grey;
font-weight: 550;
margin-left: 0.5em;
`;

// component CardOrder

export const ContainerOrderHistory=styled.div`
display: flex;
flex-direction: column;
min-height: 10vh;
width: 90%;
border: 1px solid #c6c6c6;
border-radius:5px;
padding: 0.5em;
margin-bottom: 0.5em;
p{
  margin: 0.1em 0 0.1em 0;
}
`
export const RestauntName = styled.p`
color: #e86e5a;
font-family: 'Roboto', sans-serif;
`;
export const DatadoPedido=styled.p`
color:#b8b8b8;
font-family: 'Roboto', sans-serif;
`;
export const SubTotal=styled.p`
color:#000000;
font-family: 'Roboto', sans-serif;
font: bold;
`;
//Profile eddit page

export const ContainerProfileEddit=styled.main`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width:100%;

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

