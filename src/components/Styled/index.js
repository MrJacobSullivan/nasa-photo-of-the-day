import styled from 'styled-components'

export const MainContainer = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

export const CardContainer = styled.section`
  width: 45%;
  height: 95vh;
  background: red;
`

export const MediaContainer = styled.section`
  height: 60vh;
  background: #333;

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
  background: blue;

  ${({ placeholder }) => (placeholder ? `background: #fdd835;` : null)}
`

export const H1Text = styled.h1`
  font-size: 1.4rem;
`

export const H2Text = styled.h2`
  font-size: 0.8rem;
`
