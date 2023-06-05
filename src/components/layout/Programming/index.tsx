import React, { useState } from 'react'

import Heading from '@src/components/shared/Heading'
import Icon from '@src/components/shared/Icon'
import Container from '@src/components/shared/Container'

import CardProgramming from './CardProgramming'
import {
  infoProgrammingBloqueDos,
  infoProgrammingBloqueTres,
  infoProgrammingBloqueUno
} from '@src/assets/data/infoProgramming'

const Programming = () => {
  const [changeDay, setChangeDay] = useState(true)
  return (
    <>
      <Container bgColor="gradients" id="programa">
        {changeDay && (
          <div className="container ">
            {/* TITLE */}
            <div
              className="flex justify-between flex-col lg:flex-row gap-6 lg:gap-0 items-center mb-18 w-full"
              data-aos="fade-up"
            >
              <div className="flex flex-col md:flex-row justify-center lg:justify-start items-center w-full px-2 md:px-0">
                <Heading
                  color="white"
                  size="extra-big"
                  variant="bold"
                  className="pb-4 md:pb-0  md:pr-18 w-full md:w-auto text-center md:text-start"
                >
                  Programa Día 1
                </Heading>
                <Heading
                  color="white"
                  size="extra-big"
                  variant="light"
                  className="w-full md:w-auto  md:pl-8 border-t-2 md:border-t-0 pt-4 md:pt-0 md:border-l-2 border-white leading-[0.78] text-center md:text-start"
                >
                  14 Septiembre
                </Heading>
              </div>

              <div
                className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-white flex justify-center items-center cursor-pointer"
                onClick={() => setChangeDay(false)}
              >
                <Icon name="arrow-right" className="w-[60%] h-[60%]" />
              </div>
            </div>
            <div className="flex flex-col gap-10 md:gap-12">
              <CardProgramming
                title={
                  <h3
                    color="white"
                    className="text-[18px] sm:text-[20px] md:text-[24px] text-white w-full md:w-auto"
                  >
                    <span className="font-bold pr-1">Bloque: </span> Políticas,
                    Gestión y Entorno universitario
                  </h3>
                }
                date="Hora Perú / Ecuador"
                dataText={infoProgrammingBloqueUno}
              />
              <CardProgramming
                title={
                  <h3
                    color="white"
                    className="text-[18px] sm:text-[20px] md:text-[24px] text-white w-full md:w-auto"
                  >
                    <span className="font-bold pr-1">Bloque: </span> Tecnología
                    e Innovación Educativa - Para participantes virtuales
                  </h3>
                }
                date="Hora Perú / Ecuador"
                dataText={infoProgrammingBloqueDos}
              />
              <CardProgramming
                // title="Bloque: Tecnología e Innovación Educativa - Para participantes presenciales"
                title={
                  <h3
                    color="white"
                    className="text-[18px] sm:text-[20px] md:text-[24px] text-white w-full md:w-auto"
                  >
                    <span className="font-bold pr-1">Bloque: </span> Tecnología
                    e Innovación Educativa - Para participantes presenciales
                  </h3>
                }
                date="Hora Perú / Ecuador"
                dataText={infoProgrammingBloqueTres}
              />
            </div>
          </div>
        )}
        {!changeDay && (
          <div className="container ">
            {/* TITLE */}
            <div
              className="flex justify-between flex-col lg:flex-row gap-6 lg:gap-0 items-center mb-18 w-full"
              data-aos="fade-up"
            >
              <div className="flex flex-col md:flex-row justify-center lg:justify-start items-center w-full px-2 md:px-0">
                <Heading
                  color="white"
                  size="extra-big"
                  variant="bold"
                  className="pb-4 md:pb-0  md:pr-18 w-full md:w-auto text-center md:text-start"
                >
                  Programa Día 2
                </Heading>
                <Heading
                  color="white"
                  size="extra-big"
                  variant="light"
                  className="w-full md:w-auto  md:pl-8 border-t-2 md:border-t-0 pt-4 md:pt-0 md:border-l-2 border-white leading-[0.78] text-center md:text-start"
                >
                  15 Septiembre
                </Heading>
              </div>

              <div
                className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-white flex justify-center items-center cursor-pointer"
                onClick={() => setChangeDay(true)}
              >
                <Icon name="arrow-left" className="w-[60%] h-[60%]" />
              </div>
            </div>
            <div className="flex flex-col gap-10 md:gap-12">
              <CardProgramming
                title={
                  <h3
                    color="white"
                    className="text-[18px] sm:text-[20px] md:text-[24px] text-white w-full md:w-auto"
                  >
                    <span className="font-bold pr-1">Bloque:</span>
                    Políticas, Gestión y Entorno universitario
                  </h3>
                }
                date="Hora Perú / Ecuador"
                dataText={infoProgrammingBloqueUno}
              />
              <CardProgramming
                // title="Bloque: Tecnología e Innovación Educativa - Para participantes virtuales"
                title={
                  <h3
                    color="white"
                    className="text-[18px] sm:text-[20px] md:text-[24px] text-white w-full md:w-auto"
                  >
                    <span className="font-bold pr-1">Bloque: </span> Tecnología
                    e Innovación Educativa - Para participantes virtuales
                  </h3>
                }
                date="Hora Perú / Ecuador"
                dataText={infoProgrammingBloqueDos}
              />
              <CardProgramming
                title={
                  <h3
                    color="white"
                    className="text-[18px] sm:text-[20px] md:text-[24px] text-white w-full md:w-auto"
                  >
                    <span className="font-bold pr-1">Bloque: </span> Tecnología
                    e Innovación Educativa - Para participantes presenciales
                  </h3>
                }
                date="Hora Perú / Ecuador"
                dataText={infoProgrammingBloqueTres}
              />
            </div>
          </div>
        )}
      </Container>
    </>
  )
}

export default Programming
