import styled from 'styled-components'

export const MainContainerFeed = styled.div`
    width: 100%;
    /* max-width: 350px; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
export const Cards = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 24px;
    width: 90%;
`
export const CreatingPost = styled.div`
  margin: 6px;
  width: 90%;
  display: flex;
  align-items: center;
  input{
      padding: 15px 10px;
      width: 90%;
      border-radius: 5px;
      border: 2px solid #D1D1D6;
  }
`;
export const Conteudo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-bottom: 60px;
`;