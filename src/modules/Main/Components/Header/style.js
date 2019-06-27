import styled from 'styled-components'

const HeaderContainer = styled.div`
  margin: 0 !important;
  height: 200px;
  background-color: ${props => props.theme.primaryColor}; /* for not supported browser on gradient */
  background-image: ${props => `linear-gradient(${props.theme.primaryColor}, ${props.theme.primaryLightColor})`};

  > h1 {
    margin: 0;
    padding: 0 18px;
    padding-top: 18px;
    text-align: center;
    color: ${props => props.theme.primaryLightColor};
  }

  > div {
    text-align: center;
    color: #f5f5f5;
    margin-top: 8px;
  }
`

export default HeaderContainer
