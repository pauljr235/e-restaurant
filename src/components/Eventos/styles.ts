import styled from 'styled-components'
import { cores } from '../../styles'

export const EventosContainer = styled.div`
  padding-bottom: 48px;
  img {
    width: 400px;
    height: 280px;
    border-radius: 8px;
  }

  h3 {
    font-family: 'Pacifico', cursive;
    font-weight: 400;
    font-size: 22px;
    color: ${cores.laranja};
  }
`

export const EventosTitulo = styled.h2`
  font-size: 32px;
  font-family: 'Pacifico', cursive;
  font-weight: 400;
  text-align: center;
  padding-top: 48px;
  padding-bottom: 48px;
  span {
    font-family: 'Pacifico', cursive;
    font-weight: 400;
    color: ${cores.laranja};
  }
`

export const EventosItems = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  text-align: center;
  list-style: none;
  column-gap: 24px;
  :hover {
    box-shadow: 0px 0px 10px #d3d3d3;
    transform: scale(1.05);
    transition: 0.3s;
  }
`
