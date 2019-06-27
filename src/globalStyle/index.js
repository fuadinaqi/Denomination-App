import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  @import url("https://fonts.googleapis.com/css?family=Roboto");

  body {
    font-family: 'Roboto', sans-serif;
    box-sizing: border-box;
    font-size: 12px;
    margin: 0;
  }

  input, button {
    text-rendering: auto;
    color: initial;
    letter-spacing: normal;
    word-spacing: normal;
    text-transform: none;
    text-indent: 0px;
    text-shadow: none;
    display: inline-block;
    text-align: start;
    margin: 0em;
    font: 12px;
    -webkit-writing-mode: horizontal-tb !important;

    :focus {
      outline: none;
    }
  }
`

export default GlobalStyle
