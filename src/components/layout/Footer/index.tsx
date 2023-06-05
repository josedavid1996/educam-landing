import React from 'react'

import Icon from '@src/components/shared/Icon'
import Text from '@src/components/shared/Text'

const Footer = () => {
  return (
    <>
      <footer
        className=" bg-black flex flex-col p-10 items-center gap-10 mt-12 sm:mt-16 md:mt-20"
        data-aos="fade-up"
      >
        {/* Group */}
        <div className="flex gap-6">
          <a href="#inicio" className="cursor-pointer">
            <Icon name="globe" className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
          </a>

          <a
            href="https://www.facebook.com/utecuniversidad"
            target="_blank"
            rel="noreferrer"
            className="cursor-pointer"
          >
            <Icon
              name="facebook"
              className="w-6 h-6 sm:w-8 sm:h-8 text-white"
            />
          </a>

          <a
            href="https://www.linkedin.com/school/utec-universidad-de-ingenieria-y-tecnologia/mycompany/"
            target="_blank"
            rel="noreferrer"
            className="cursor-pointer"
          >
            <Icon
              name="linkedin"
              className="w-6 h-6 sm:w-8 sm:h-8 text-white"
            />
          </a>

          <a
            href="https://www.instagram.com/utecuniversidad/"
            target="_blank"
            rel="noreferrer"
            className="cursor-pointer"
          >
            <Icon
              name="instagram"
              className="w-6 h-6 sm:w-8 sm:h-8 text-white"
            />
          </a>
          <a
            href="https://twitter.com/UTECuniversidad"
            target="_blank"
            rel="noreferrer"
            className="cursor-pointer"
          >
            <Icon name="twitter" className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
          </a>

          <a
            href="https://www.youtube.com/user/universidadutec"
            target="_blank"
            rel="noreferrer"
            className="cursor-pointer"
          >
            <Icon name="youtube" className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
          </a>
        </div>
        <Text size="sm" color="white" variant="medium">
          Copyright © EduCamp 2023 es un evento de UTEC - Todos los derechos
          reservados
        </Text>
      </footer>
    </>
  )
}

export default Footer
