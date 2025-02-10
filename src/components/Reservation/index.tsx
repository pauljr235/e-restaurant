const Reservation = () => (
  <div className="container">
    <h1>
      Faça <span>sua reserva</span>
    </h1>
    <form>
      <label style={{ display: 'block' }} htmlFor="nome" id="nome">
        Seu nome
      </label>
      <input type="text" />
      <label style={{ display: 'block' }} htmlFor="email" id="email">
        Seu E-mail
      </label>
      <input type="text" />
      <label style={{ display: 'block' }} htmlFor="email" id="email">
        Seu telefone
      </label>
      <input type="text" />
    </form>
    <div>
      <h3>Redes sociais</h3>
      <div>
        <a href="#">
          <i></i>
        </a>
        <a href="#">
          <i></i>
        </a>
        <a href="#">
          <i></i>
        </a>
      </div>
    </div>
  </div>
)

export default Reservation
