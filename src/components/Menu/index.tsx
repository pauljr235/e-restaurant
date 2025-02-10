import { useState } from 'react'
import {
  MenuButton,
  MenuContainer,
  ItemsContainer,
  MenuTitulo,
  Container,
  MenuNav
} from './styles'
import cerveja from '../../assets/images/cardapio/bebidas/cerveja.jpg'
import brusc from '../../assets/images/cardapio/entradas/entrada.jpg'

const menuItems = {
  Entradas: [
    {
      name: 'Sopa de Legumes',
      description: 'Sopa de legumes fresca.',
      image: brusc
    },
    {
      name: 'Bruschetta',
      description: 'Pão italiano com tomate.',
      image: brusc
    },
    {
      name: 'Salada Caprese',
      description: 'Tomate, mussarela e manjericão.',
      image: brusc
    },
    {
      name: 'Salada Caprese',
      description: 'Tomate, mussarela e manjericão.',
      image: brusc
    },
    {
      name: 'Salada Caprese',
      description: 'Tomate, mussarela e manjericão.',
      image: brusc
    }
  ],
  Pratos: [
    {
      name: 'Frango Grelhado',
      description: 'Frango com arroz e salada.',
      image: 'https://example.com/images/frango.jpg'
    },
    {
      name: 'Lasanha',
      description: 'Lasanha de carne com molho.',
      image: 'https://example.com/images/lasanha.jpg'
    },
    {
      name: 'Lasanha',
      description: 'Lasanha de carne com molho.',
      image: 'https://example.com/images/lasanha.jpg'
    }
  ],
  Sobremesas: [
    {
      name: 'Mousse de Chocolate',
      description: 'Chocolate com calda.',
      image: 'https://example.com/images/mousse.jpg'
    },
    {
      name: 'Tiramisu',
      description: 'Café e mascarpone.',
      image: 'https://example.com/images/tiramisu.jpg'
    }
  ],
  Bebidas: [
    { name: 'Cerveja', description: 'Cerveja gelada.', image: cerveja },
    {
      name: 'Suco Natural',
      description: 'Suco de frutas.',
      image: 'https://example.com/images/suco.jpg'
    }
  ]
}

const Menu = () => {
  const [activeCategory, setActiveCategory] =
    useState<keyof typeof menuItems>('Entradas')

  return (
    <Container>
      <MenuTitulo>
        Nosso <span>Cardápio</span>{' '}
      </MenuTitulo>
      <MenuContainer className="container">
        <MenuNav>
          {Object.keys(menuItems).map((category) => (
            <MenuButton
              key={category}
              className={activeCategory === category ? 'active' : ''}
              onClick={() =>
                setActiveCategory(category as keyof typeof menuItems)
              }
            >
              {category}
            </MenuButton>
          ))}
        </MenuNav>
        <ItemsContainer>
          {menuItems[activeCategory].map((item, index) => (
            <div key={index}>
              <img src={item.image} alt={item.name} />
              <h3>{item.name}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </ItemsContainer>
      </MenuContainer>
    </Container>
  )
}

export default Menu
