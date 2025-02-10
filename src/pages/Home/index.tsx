import About from '../../components/About'
import Carousel from '../../components/Carousel'
import Eventos from '../../components/Eventos'
import Menu from '../../components/Menu'
import Reservation from '../../components/Reservation'

const Home = () => {
  return (
    <>
      <Carousel />
      <About />
      <Eventos />
      <Menu />
      <Reservation />
    </>
  )
}

export default Home
