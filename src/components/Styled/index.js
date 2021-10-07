import styled from 'styled-components'

export const MainContainer = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100vh;

  background: ${({ theme }) => theme.dark};

  color: ${({ theme }) => theme.dark};
`

export const CardContainer = styled.section`
  width: 42vw;
  height: auto;

  filter: drop-shadow(0 25px 25px rgba(0, 0, 0, 0.2));
`

export const MediaContainer = styled.section`
  height: 60vh;
  border-radius: 2px 2px 0 0;
  background: ${({ theme }) => theme.backdrop};

  a {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  a img {
    max-height: 60vh;
    max-width: 100%;
  }
`

export const InformationContainer = styled.section`
  border-radius: 0 0 2px 2px;
  padding: 2%;
  height: 32vh;
  display: flex;

  background: ${({ theme }) => theme.light};
`

export const TextContainer = styled.div`
  margin-right: 2%;
  display: flex;
  flex-direction: column;
`

export const H1Text = styled.h1`
  font-size: 1.4rem;
  margin-bottom: 2%;
  font-weight: 500;
`

export const H2Text = styled.h2`
  font-size: 0.8rem;
  margin-bottom: 5%;
  font-weight: 300;
`
export const PText = styled.p`
  text-align: justify;
  line-height: 1.5;
  flex-grow: 1;
  margin-bottom: 5%;

  overflow-y: scroll;
  text-overflow: clip;

  font-size: 0.8rem;
`
