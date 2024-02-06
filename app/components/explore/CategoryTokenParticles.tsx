import React, { useEffect, useState } from 'react'
import Particles from 'react-tsparticles'
import { Engine } from 'tsparticles-engine'

const createEmitters = (tokenSymbols: string[]) => {
  return [
    {
      autoPlay: true,
      fill: true,
      life: {
        wait: true,
        duration: 1,
      },
      rate: {
        quantity: 1,
        delay: { min: 6, max: 12 },
      },
      startCount: 0,
      particles: {
        shape: {
          type: 'images',
          options: {
            images: tokenSymbols.map((sym) => ({
              src: `/icons/tokens/${sym.toLowerCase()}.svg`,
              width: 48,
              height: 48,
            })),
          },
        },
        rotate: {
          value: 0,
          random: true,
          direction: 'clockwise',
          animation: {
            enable: true,
            speed: 15,
            sync: false,
          },
        },
        lineLinked: {
          enable: false,
        },
        opacity: {
          value: 0.4,
        },
        size: {
          value: 16,
          random: false,
        },
        move: {
          speed: 1,
          random: false,
          outMode: 'destroy',
        },
      },
      position: {
        y: 0,
      },
    },
  ]
}

const CategoryTokenParticles = ({
  tokenSymbols,
  id,
}: {
  tokenSymbols: string[]
  id: string
}) => {
  const [mounted, setMounted] = useState(false)
  const [emitters, setEmitters] = useState<any>()

  useEffect(() => {
    setMounted(true)
    setEmitters(createEmitters(tokenSymbols))
  }, [])

  // Delay rendering until the library is fully initialized
  if (!mounted) return null

  //   const emitters = createEmitters(tokenSymbols)

  return (
    <Particles
      id={`tsparticles-${id}`}
      init={async (engine: Engine) => {
        // On library initialization
        console.log('Particles library initialized:', engine)
      }}
      options={{
        fullScreen: false,
        particles: {
          move: {
            angle: 10,
            attract: {
              rotate: {
                x: 600,
                y: 1200,
              },
            },
            direction: 'bottom',
            enable: true,
            speed: 0.1,
          },
          opacity: {
            value: 0,
          },
        },
        emitters: emitters,
      }}
    />
  )
}

export default CategoryTokenParticles
