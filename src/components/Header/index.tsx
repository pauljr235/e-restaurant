import { Container, HeaderContainer, LinksContainer, Titulo } from './styles'

const Header = () => (
  <Container>
    <HeaderContainer className="container">
      <Titulo>E-restaurat</Titulo>
      <nav>
        <LinksContainer>
          <li>
            <a href="#">
              <i className="bi bi-house-door"></i>
              Sobre o restaurante
            </a>
          </li>
          <li>
            <a href="#">
              <i className="bi bi-calendar-check"></i>
              Eventos
            </a>
          </li>
          <li>
            <a href="#">
              <i className="bi bi-card-list"></i>
              Cardápio
            </a>
          </li>
          <li>
            <a href="#">
              <i className="bi bi-chat-left-text"></i>
              Contatos
            </a>
          </li>
        </LinksContainer>
      </nav>
    </HeaderContainer>
  </Container>
)

export default Header
