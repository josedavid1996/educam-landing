import React, { useRef, MutableRefObject, useState, useEffect } from 'react'
// import { useRouter } from 'next/router'
// import Button from './Button'
// import Text from './Text'

const Countdown = () => {
  // const [isCounter, setIsCounter] = useState(true)
  const fecha = '09/14/2023 08:00 AM'
  // const router = useRouter()
  // const [dia, setdia] = useState(new Date().getDate())
  // const [mes, setMes] = useState(new Date().getMonth())

  const limite = new Date(fecha).getTime()
  const segundos = 1000
  const minutos = segundos * 60
  const horas = minutos * 60
  const dias = horas * 24
  const diasRestantes: MutableRefObject<undefined | number> = useRef()
  const horasRestantes: MutableRefObject<undefined | number> = useRef()
  const minutosRestantes: MutableRefObject<undefined | number> = useRef()
  const [segundosRestantes, setSegundosRestantes] = useState(0)

  useEffect(() => {
    const ahora = new Date().getTime()
    const duracion = limite - ahora
    const cuentaAtras = setInterval(() => {
      diasRestantes.current = Math.floor(duracion / dias)

      horasRestantes.current = Math.floor((duracion % dias) / horas)

      minutosRestantes.current = Math.floor((duracion % horas) / minutos)

      setSegundosRestantes(Math.floor((duracion % minutos) / segundos))
    }, 1000)
    if (duracion <= 0) {
      // setIsCounter(false)
      clearInterval(cuentaAtras)
    }
    return () => {
      clearInterval(cuentaAtras)
    }
  }, [segundosRestantes, dias, horas, limite, minutos])
  const dhms = () => {
    return {
      dia: 'Días',
      hora: 'Horas',
      minuto: 'Minutos',
      segundo: 'Segundos'
    }
  }

  return (
    <div>
      <div className="flex bg-primary-950 text-white flex-col items-center gap-y-2 md:flex-row py-4 md:py-7 md:justify-center md:items-start ">
        <div className="flex gap-5 ">
          <div className="flex flex-col justify-center items-center gap-2 ">
            <div
              data-aos="fade-up"
              className=" card-timer text-3xl md:text-5xl font-bold py-4 px-3 rounded-md gradients-timer"
            >
              {diasRestantes.current! < 10
                ? `0${diasRestantes.current}`
                : diasRestantes.current}
            </div>
            <p className="md:text-sm text-xs font-normal text-white">
              {dhms()!.dia}
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <div
              data-aos="fade-up"
              className=" card-timer text-3xl md:text-5xl font-bold py-4 px-3 rounded-md gradients-timer"
            >
              {horasRestantes.current! < 10
                ? `0${horasRestantes.current}`
                : horasRestantes.current}
            </div>
            <p className="md:text-sm text-xs font-normal text-white">
              {dhms()!.hora}
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <div
              className="card-timer text-3xl md:text-5xl font-bold py-4 px-3 rounded-md gradients-timer"
              data-aos="fade-up"
            >
              {minutosRestantes.current! < 10
                ? `0${minutosRestantes.current}`
                : minutosRestantes.current}
            </div>
            <p className="md:text-sm text-xs font-normal text-white">
              {dhms()!.minuto}
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <div
              data-aos="fade-up"
              className=" card-timer text-3xl md:text-5xl font-bold py-4 px-3 rounded-md gradients-timer"
            >
              {segundosRestantes < 10
                ? `0${segundosRestantes}`
                : segundosRestantes}
            </div>
            <p className="md:text-sm text-xs font-normal text-white">
              {dhms()!.segundo}
            </p>
          </div>
        </div>
      </div>

      {/* <div
        className={`${
          !isCounter ? 'flex' : 'hidden'
        } my-8  justify-center gap-4 flex-col`}
      >
        <Text
          size="md"
          color="primary"
          variant="bold"
          className="text-center"
          data-aos="fade-up"
        >
          {dia < 6 || dia >= 8 || mes < 11
            ? 'Gracias por ser parte, nos vemos en la proxima edición'
            : ' Accede a la transmisión'}
        </Text>
        <Button
          onClick={() => {
            router.push(
              dia <= 6
                ? 'https://youtu.be/9bVoxUsUsso'
                : 'https://youtu.be/qGap_xXcscc'
            )
          }}
          variant="solid"
          color="secondary"
          className={`${dia < 6 || dia >= 8 || mes < 11 ? 'hidden' : 'block'}`}
        >
          <a>Entrar</a>
        </Button>
      </div> */}
    </div>
  )
}

export default Countdown
