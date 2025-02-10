import styled from 'styled-components'
import { cores } from '../../styles'

export const Container = styled.div`
  background-color: ${cores.lilas};
  padding: 48px 0;
`

export const AboutContainer = styled.div`
  display: flex;
  align-items: center;
  img {
    width: 526px;
    height: 450px;
    padding: 32px 12px;
    border-radius: 12px;
  }
`
export const AboutText = styled.div`
  padding: 0 12px;

  p {
    padding: 8px 0;
  }

  h2 {
    font-family: Pacifico, cursive;
    font-size: 28px;
    font-weight: 400;
  }

  h3 {
    margin-top: 8px;
    font-family: Pacifico, cursive;
    font-size: 24px;
    font-weight: 400;
  }

  li {
    margin-top: 4px;
    list-style: none;
  }

  span {
    color: ${cores.laranja};
    font-family: Pacifico, cursive;
    font-weight: 400;
  }
`
