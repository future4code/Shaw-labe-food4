import styled from "styled-components";

export const CartContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  min-height: 100vh;
  font-family: 'Roboto', sans-serif;
  .restinf{
    width: 90%;
    margin: 10px 0;
  }
  .nome{
    color: #E86E5A;
    margin: 5px 0;
  }
  .inf{
    color: #C7C7CC;
    margin: 5px 0;
  }
`;
export const ContainerAddress = styled.div`
  display: flex;
  align-items: left;
  flex-direction: column;
  justify-content: center;
  background-color: #e5e4e2;
  width: 100vw;
  height: 10vh;
`;
export const PAddress = styled.p`
  margin: 2px;
  color: lightgrey;
  font-size: 16px;
  font-weight: bold;
  font-family: 'Roboto', sans-serif;
  letter-spacing: 1px;
  padding-left: 1em;
  gap: 5px;
`;
export const ProfileAdress=styled.p`
margin:2px;
font-weight: bold;
padding-left: 1em;
font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
`;
export const Address = styled.p`
  color: black;
  font-size: 16px;
  font-weight: bold;
  font-family: 'Roboto', sans-serif;
  margin-left: 10px;
`;
export const ContainerTotal = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
   margin-top: 15px;
  width: 90%;
`;
export const ContainerH5 = styled.div`
  display: flex;
  align-items: left;
  justify-content: left;
`;
export const H5Styled = styled.h5`
  color: grey;
`;
export const ContainerPrice = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  flex-direction: column;
  margin-right: 20px;
  p{
    margin: 0;
    align-self: flex-start;
  }
  .valor{
    margin: 0;
    align-self: flex-start;
    color: #E86E5A
;
  }
`;
export const FormOfPayment = styled.p`
  width: 96%;
  border-bottom: 2px solid grey;
  font-weight: 550;
`;
export const FormPayment = styled.form`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  width: 96%;
  gap: 5px;
`;
export const InputStyled = styled.input`
  margin-right: 5px;
`;
export const LabelStyled = styled.label`
  font-weight: bold;
  gap: 10px;
`;
export const Button = styled.button`
  outline: none;
  width: 60%;
  height: 5vh;
  text-decoration: none;
  color: black;
  background-color: #e86e5a;
  border: none;
  font-weight: bold;
  font-size: 14px;
  margin-top: 30px;
  margin-bottom: 60px;
  padding: 5px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
 
  
`;
