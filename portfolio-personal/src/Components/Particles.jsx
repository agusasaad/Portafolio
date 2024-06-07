import { useEffect, useRef } from 'react';
import { Box } from "@chakra-ui/react";
import { gsap } from 'gsap';

const Particles = () => {
  const particlesContainerRef = useRef(null);

  useEffect(() => {
    const createParticles = () => {
      const numParticles = 150; // Número de partículas
      const particlesContainer = particlesContainerRef.current;
      const { width, height } = particlesContainer.getBoundingClientRect(); // Obtenemos las dimensiones del contenedor

      const size = 1; // Tamaño deseado de las partículas

      for (let i = 0; i < numParticles; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        particle.style.left = Math.random() * width + 'px'; // Posición horizontal aleatoria
        particle.style.top = Math.random() * height + 'px'; // Posición vertical aleatoria
        particle.style.width = `${size}px`; // Asignar el ancho
        particle.style.height = `${size}px`; // Asignar la altura
        particlesContainer.appendChild(particle);

        animateParticle(particle); // Animar la partícula
      }
    }

    const animateParticle = (particle) => {
      gsap.to(particle, {
        x: Math.random() * 100 - 50, // Movimiento horizontal aleatorio
        y: Math.random() * 100 - 50, // Movimiento vertical aleatorio
        duration: () => Math.random() * 10 + 5, // Duración aleatoria entre 5 y 15 segundos (movimiento más lento)
        repeat: -1, // Repetir la animación infinitamente
        yoyo: true, // Hacer que la animación se revierta al final
        ease: 'power1.inOut', // Easing
      });
    }

    createParticles();
  }, []);

  return (
    <Box w={"100%"} h={"100%"} display={'flex'} position={'absolute'} zIndex={0} id='particles'>
      <div ref={particlesContainerRef} style={{ width: '100%', height: '100%', position: 'relative' }}></div>
      {/* eslint-disable-next-line react/no-unknown-property */}
      <style jsx>{`
        .particle {
          position: absolute;
          background-color: #6d6d6d; /* Color gris */
          border-radius: 50%; /* Para dar forma de círculo */
        }
      `}</style>
    </Box>
  );
};

export default Particles;
