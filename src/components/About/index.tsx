import sala from '../../assets/images/restaurante.jpg'
import { AboutContainer, AboutText, Container } from './styles'

const About = () => (
  <Container>
    <AboutContainer className="container">
      <img src={sala} alt="" />
      <AboutText>
        <h2>
          Sobre <span>o restaurante</span>
        </h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error
          dolorum in corrupti minus assumenda iure necessitatibus magni est
          mollitia culpa ex quaerat, voluptas et modi, debitis voluptates esse
          doloribus sint!
        </p>
        <h3>
          Sobre <span>o espaço</span>
        </h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo unde
          modi nobis quos vel iure doloribus, qui eius officiis, aut natus
          facilis voluptates debitis laboriosam quis id blanditiis consequuntur
          enim.
        </p>
        <ul>
          <li>- Estacionamento gratuito</li>
          <li>- Wi-fi</li>
          <li>- Acessibilidade</li>
        </ul>
      </AboutText>
    </AboutContainer>
  </Container>
)

export default About
