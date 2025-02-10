import styled from 'styled-components'
import { cores } from '../../styles'

export const Container = styled.div`
  background-color: ${cores.laranja};
  padding: 24px 4%;
`

export const HeaderContainer = styled.div`
  justify-content: space-between;
  align-items: center;
  display: flex;
`

export const Titulo = styled.h1`
  font-family: 'Pacifico', cursive;
  font-size: 32px;
  font-weight: 300;
  color: ${cores.branco};
`

export const LinksContainer = styled.ul`
  display: flex;
  list-style: none;
  gap: 16px;

  :hover {
    box-shadow: 0px 0px 0px #d3d3d3;
    transform: scale(1.08);
    transition: 0.2s;
    color: black;
    background-color: ${cores.branco};
    border-radius: 8px;
  }

  i {
    margin-right: 8px;
  }

  a {
    text-decoration: none;
    color: ${cores.branco};
    font-weight: bold;
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    padding: 8px 16px;
  }
`
