import React, { useEffect, useState } from 'react'
import restaurante from '../../assets/images/slides/slide1.png'
import taça from '../../assets/images/slides/slide2.png'
import lenha from '../../assets/images/slides/slide3.png'

const images = [restaurante, taça, lenha] // Array com as imagens

const Carousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0) // Índice da imagem atual

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    )
  }

  useEffect(() => {
    const interval = setInterval(nextImage, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div style={{ position: 'relative', margin: 'auto' }}>
      <div style={{ textAlign: 'center' }}>
        <img
          src={images[currentIndex]}
          alt={`Imagem ${currentIndex + 1}`}
          style={{
            width: '100%',
            height: 'auto',
            transition: 'transform 2.5s ease-out'
          }}
        />
      </div>

      {/* Botão Anterior */}
      <button
        onClick={prevImage}
        style={{
          position: 'absolute',
          top: '50%',
          left: '10px',
          transform: 'translateY(-50%)',
          backgroundColor: 'transparent',
          color: '#878787',
          border: 'none',
          borderRadius: '50%',
          width: '40px',
          height: '40px',
          cursor: 'pointer'
        }}
      >
        ◀
      </button>

      {/* Botão Próxima */}
      <button
        onClick={nextImage}
        style={{
          position: 'absolute',
          top: '50%',
          right: '10px',
          transform: 'translateY(-50%)',
          backgroundColor: 'transparent',
          color: '#878787',
          border: 'none',
          borderRadius: '50%',
          width: '40px',
          height: '40px',
          cursor: 'pointer'
        }}
      >
        ▶
      </button>
    </div>
  )
}

export default Carousel
