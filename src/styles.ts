import { createGlobalStyle } from 'styled-components'

export const cores = {
  laranja: '#e15f41',
  branco: '#fff',
  lilas: '#ffeae6',
  cinza: '#d3d3d3'
}

export const GlobalCss = createGlobalStyle`
  *{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
}

  .container{
    max-width: 1400px;
    margin: 0 auto;
    width: 100%;
  }

`
