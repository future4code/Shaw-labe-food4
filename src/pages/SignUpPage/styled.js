import styled from "styled-components";

export const H4Style = styled.h6`
  margin-left: 8%;
  margin-right: 8%;
  margin-bottom: 1vh;
  justify-content: flex-start;
`;

export const PostButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-self: center;
  padding: 2% 4%;
  width: 80vw;
  height: 7vh;
  margin: 3%;
  cursor: pointer;
  background: linear-gradient(90deg, #ff6489 0%, #f9b24e 100%), #4088cb;
  border: none;
  border-radius: 12px;
`;

export const ButtonLetter = styled.div`
  height: 23px;
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 23px;
  color: #ffffff;
  flex: none;
  order: 0;
  flex-grow: 0;
`;

export const ImgSize = styled.img`
  width: 50%;
  margin: 12vh;
`