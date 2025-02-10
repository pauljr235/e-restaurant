import aniversario from '../../assets/images/eventos/aniversario.jpg'
import casamento from '../../assets/images/eventos/casamento.jpg'
import confraternizacoes from '../../assets/images/eventos/confraternizacoes.jpg'
import { EventosContainer, EventosItems, EventosTitulo } from './styles'

const Eventos = () => (
  <div className="container">
    <EventosTitulo>
      Para todas <span>as ocasiões</span>
    </EventosTitulo>
    <EventosContainer>
      <EventosItems>
        <li>
          <img src={aniversario} alt="" />
          <h3>
            <i className="bi bi-calendar2-heart"></i>
            Aniversários
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id illum
            dolores autem porro repellat optio aperiam totam aut explicabo
            libero quos fuga corrupti, debitis nisi molestiae? Soluta incidunt
            quia autem?
          </p>
        </li>
        <li>
          <img src={casamento} alt="" />
          <h3>
            <i className="bi bi-arrow-through-heart-fill"></i>
            Casamentos
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
            praesentium, repellendus et harum placeat culpa voluptates
            recusandae! Nisi facilis voluptas possimus quod sequi delectus
            voluptate perferendis officia numquam. Neque, aperiam?
          </p>
        </li>
        <li>
          <img src={confraternizacoes} alt="" />
          <h3>
            <i className="bi bi-people-fill"></i>
            Confraternizações
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam id
            deserunt omnis ab, tenetur obcaecati modi maiores harum repellat,
            eos laudantium quidem dolor. Beatae, necessitatibus. Veniam
            perferendis libero commodi molestiae.
          </p>
        </li>
      </EventosItems>
    </EventosContainer>
  </div>
)

export default Eventos
