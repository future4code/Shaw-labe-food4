import { Button } from "@material-ui/core";
import styled from "styled-components";


export const ContainerFooter = styled.div`
    display: flex;
    width: 100vw;
    align-items: center;
    position: fixed;
    bottom: 0;
    height: 7vh;
    box-shadow: 0px 0px 5px black;
    background-color: white;
    img{
      width: 50px;
      height: 50px;
    }
    div{
      display: flex;
      width: 100%;
      align-items: center;
      justify-content:space-around;
    }
`
export const ButtonFooter = styled(Button)`
    width: 120px;
    height: 49px;
    padding: 10px 46px 9px 47px;
`