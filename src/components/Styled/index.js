import styled from 'styled-components'

export const MainContainer = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  background: ${({ theme }) => theme.text};
  color: ${({ theme }) => theme.text};
`

export const CardContainer = styled.section`
  width: 45%;
  height: auto;
  filter: drop-shadow(0 25px 25px rgba(0, 0, 0, 0.2));
`

export const MediaContainer = styled.section`
  height: 60vh;
  border-radius: 2px 2px 0 0;
  background: ${({ theme }) => theme.secondary};

  a {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  a img {
    max-height: 60vh;
    max-width: 100%;
    padding: 0;
    margin: 0;
  }
`

export const InformationContainer = styled.section`
  height: 35vh;
  border-radius: 0 0 2px 2px;

  background: ${({ theme }) => theme.background};
`

export const H1Text = styled.h1`
  font-size: 1.4rem;
`

export const H2Text = styled.h2`
  font-size: 0.8rem;
`
