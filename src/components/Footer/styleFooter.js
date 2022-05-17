import { Button } from "@material-ui/core";
import styled from "styled-components";


export const ContainerFooter = styled.div`
    display: flex;
    width: 100%;
    justify-content:space-around;
    position: fixed;
    bottom: 0;
    height: 7vh;
    box-shadow: 0px 0px 5px black;
    img{
      width: 50px;

    }
    
`
export const ButtonFooter = styled(Button)`
    width: 120px;
    height: 49px;
    padding: 10px 46px 9px 47px;
`