import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
import HackerRoom from '../Components/HackerRoom'
import CanvasLoader from '../Components/CanvasLoader'
import { useMediaQuery } from 'react-responsive'
import { calculateSizes } from '../constants'
import Target from '../Components/Target'
import ReactLogo from '../Components/ReactLogo'
import HeroCamera from '../Components/HeroCamera'
import Cube from '../Components/Cube'
import Rings from '../Components/Rings'
import Button from '../Components/Button'
const Hero = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' })
  const isTablet = useMediaQuery({ query: '(min-width: 768px) and (max-width: 1024px)' })
  const isSmall = useMediaQuery({ query: '(max-width: 440px)' })
  const sizes = calculateSizes(isSmall, isMobile, isTablet)

  return (
    <section id='home' className="h-screen w-full flex flex-col items-center justify-center relative">
      <div className="absolute top-1/4 -translate-y-12 w-full flex flex-col items-center gap-3 text-center">
        <p className="sm:text-3xl text-2xl font-medium text-white font-generalsans">
          Hi, I'm Suprateek, <span className="waving-hand">👋</span>
        </p>
        <p className="hero_tag text-gray_gradient">Building Products and Brands</p>
      </div>



      {/* 3D Scene */}
      <div className="absolute inset-0 w-full h-full">
        <Canvas className="w-full h-full">
          <Suspense fallback={<CanvasLoader />}>
            <PerspectiveCamera makeDefault position={[0, 0, 20]} />
            <HeroCamera isMobile={isMobile}>
              <HackerRoom scale={sizes.deskScale} position={sizes.deskPosition} rotation={[0, Math.PI, 0]} />
             
            </HeroCamera>

            {/* Objects in the Scene */}
            <group>
              <Target position={sizes.targetPosition} />
              <ReactLogo position={sizes.reactLogoPosition} />
              <Cube position={sizes.cubePosition} />
              {/* <Rings position={sizes.ringPosition} /> */}
            </group>

            {/* Lighting */}
            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 10]} intensity={0.5} />
          </Suspense>
         
        </Canvas>
      </div>
      <div className='absolute bottom-7 left-0 right-0 w-full z-10 c-space'>
      <a href="#about" className='w-fit'>
        <Button name = "Let's Work together 🚀" isBeam containerClass = "sm:w-fit w-full sm:min-w-96" />
      </a>
      </div>
    </section>
  )
}

export default Hero
