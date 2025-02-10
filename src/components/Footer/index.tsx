import { Titulo } from '../Header/styles'
import {
  Descricao,
  FooterContainer,
  FooterImg,
  FooterTitulo,
  SocialLink,
  SocialLinks
} from './styles'

const Footer = () => (
  <FooterContainer>
    <FooterTitulo>E-restaurat</FooterTitulo>
    <SocialLinks>
      <a href="#">
        <SocialLink className="bi bi-instagram"></SocialLink>
      </a>
      <a href="#">
        <SocialLink className="bi bi-facebook"></SocialLink>
      </a>
      <a href="#">
        <SocialLink className="bi bi-twitter"></SocialLink>
      </a>
    </SocialLinks>
    <Descricao>
      A efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade dos produtos é toda do
      estabelecimento contratado.
    </Descricao>
  </FooterContainer>
)

export default Footer
