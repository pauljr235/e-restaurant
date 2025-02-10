import styled from 'styled-components'
import { cores } from '../../styles'

export const Container = styled.div`
  background-color: ${cores.lilas};
`

export const MenuContainer = styled.div`
  display: flex;
  background-color: ${cores.lilas};
`
export const MenuNav = styled.nav`
  padding: 0;
  margin-top: 22px;
  padding-right: 32px;
  :hover {
    background-color: ${cores.laranja};
    color: white;
    transform: scale(1.05);
    transition: 0.3s;
  }
`

export const MenuButton = styled.button`
  display: block;
  text-align: left;
  padding: 8px 16px;
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
  margin-bottom: 8px;
  color: ${cores.laranja};
  border: none;
  background-color: transparent;
  cursor: pointer;
  font-size: 18px;
  border-radius: 8px;
  font-style: italic;
  width: 100%;
  &.active {
    background-color: ${cores.laranja};
    color: white;
    font-weight: bold;
  }
`
export const MenuTitulo = styled.h1`
  text-align: center;
  font-family: 'Pacifico', cursive;
  font-weight: 400;
  padding-top: 48px;
  margin-bottom: 48px;
  span {
    color: ${cores.laranja};
    font-family: 'Pacifico', cursive;
    font-weight: 400;
  }
`
export const ItemsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-top: 20px;
  text-align: center;

  img {
    width: 100%;
    height: auto;
    border-radius: 8px;
  }
`
