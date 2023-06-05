import React, { useEffect, useState } from 'react'

// import Image from 'next/image'

import Icon from '@src/components/shared/Icon'
import Text from '@src/components/shared/Text'
interface Props {
  nombre: string
  pais: string
  img?: string
  id: number
}

const CardGuest = ({ nombre, pais, img, id }: Props) => {
  const [windowWidth, setWindowWidth] = useState<undefined | number>()

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }

    // Agregar el event listener al montar el componente
    window.addEventListener('resize', handleResize)

    // Eliminar el event listener al desmontar el componente
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [windowWidth])

  return (
    <div
      className="inline-flex flex-col items-center pb-8 lg:pb-0 "
      data-aos="flip-left"
    >
      <div className="w-full relative flex justify-center">
        <div className=" w-22 h-22  sm:w-30 sm:h-30  rounded-full flex justify-center items-center mb-2 bg-white ">
          <Icon
            name="circle"
            className="absolute top-0 bottom-0 left-0 text-white h-full"
          />
          {windowWidth! < 768 ? (
            <Icon
              name="circle"
              className={`${
                id % 2 !== 0 && 'sm:hidden'
              } absolute top-0 bottom-0 right-0 text-white h-full`}
            />
          ) : (
            <Icon
              name="circle"
              className={`${
                id % 3 !== 0 && 'hidden'
              } absolute top-0 bottom-0 right-0 text-white h-full`}
            />
          )}
        </div>
      </div>
      <Text size="xl" color="white" className="font-bold" variant="bold">
        {nombre}
      </Text>
      <Text size="xl" color="white" className="text-center" variant="light">
        {pais}
      </Text>
    </div>
  )
}

export default CardGuest
