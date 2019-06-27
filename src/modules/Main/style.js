import styled from 'styled-components'

const MainContainer = styled.div`
  position: relative;
  min-height: 95vh;
  max-width: 400px;
  margin: 0 auto;
  padding-bottom: 8px;

  > table, > div, > form {
    margin: 0 8px;
  }

  h2 {
    text-align: center;
  }

  > img {
    position: absolute;
    z-index: -1;
    bottom: 0;
    left: 20px;
    transform: rotate(-30deg);
    opacity: 0.2;
  }
`

export {
  MainContainer
}
