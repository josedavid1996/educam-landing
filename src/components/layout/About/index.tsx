import React from 'react'

import Button from '@src/components/shared/Button'
import Heading from '@src/components/shared/Heading'
import Input from '@src/components/shared/Input'
import Select from '@src/components/shared/Select'
import Text from '@src/components/shared/Text'
import Container from '@src/components/shared/Container'

import useForm, { FormError } from '@src/hooks/useForm'
import useGetUbigeo from '@src/hooks/useGetUbigeo'

import { isEmpty } from '@src/utils'
import { ErrorMessages } from '@src/utils/messages'
import { useCreateInscription } from '@src/service/useCreateInscription'
import { Toast } from '@src/utils/toast'
import { useGetAllCountInscriptions } from '@src/service/useGetAllInscriptions'

const About = () => {
  const { values, ...form } = useForm({
    initialValues: {
      nombres: '',
      institucion: '',
      cargo: '',
      pais: '',
      asistencia: '',
      correo: ''
    },
    validate: (values) => {
      const errors: FormError<typeof values> = {}
      if (isEmpty(values.asistencia)) {
        errors.asistencia = ErrorMessages.empty
      }
      if (isEmpty(values.cargo)) {
        errors.cargo = ErrorMessages.empty
      }
      if (isEmpty(values.correo)) {
        errors.correo = ErrorMessages.empty
      }
      if (isEmpty(values.institucion)) {
        errors.institucion = ErrorMessages.empty
      }
      if (isEmpty(values.nombres)) {
        errors.nombres = ErrorMessages.empty
      }
      if (isEmpty(values.pais)) {
        errors.pais = ErrorMessages.empty
      }
      return errors
    }
  })

  const { CreateInscription } = useCreateInscription()
  const { refetch } = useGetAllCountInscriptions()
  const ubigeo = useGetUbigeo()

  const handleSubmit = async () => {
    try {
      const res = await CreateInscription({
        nombre: values.nombres,
        asistencia: values.asistencia,
        cargo: values.cargo,
        email: values.correo,
        institucion: values.institucion,
        pais: values.pais
      })

      if (res.status) {
        Toast({
          type: 'success',
          message: 'Se agrego tu inscripción'
        })
        form.clear()
        refetch()
      } else {
        Toast({
          type: 'error',
          message: res.message!
        })
      }
    } catch (error: any) {
      Toast({
        type: 'error',
        message: 'Error desconocido'
      })
    }
  }

  return (
    <>
      <Container bgColor="bg-white" id="inscribete" pt="md:pt-[110px]">
        <div
          className="container flex flex-col md:flex-row justify-between items-center md:items-start gap-20 md:gap-6 "
          data-aos="fade-up"
        >
          {/* TEXT */}
          <div className="w-full md:max-w-[431px] ">
            <Heading
              className="text-center pb-4 "
              size="3xl"
              color="black"
              variant="bold"
            >
              ¿Qué es Educamp?
            </Heading>

            <Text color="black" size="lg" className="mb-2 md:mb-4">
              Es un Evento Internacional organizado por UTEC desde el año 2020,
              orientado al fortalecimiento de formas de enseñanza innovadoras, a
              través del intercambio de experiencias, reflexiones e
              investigación en torno al diseño de la educación superior del
              futuro.
            </Text>
            <div className="mb-2 md:mb-4">
              <Text color="black" size="lg" variant="bold">
                EduCamp 2023: Diseñando la educación del futuro
              </Text>
              <Text color="black" size="lg">
                4ta versión del Educamp Internacioal, la cual se está
                co-organizando con la Escuela Superior Politécnica del Litoral -
                ESPOL, de Ecuador. Tiene como objetivo el generar espacios para
                el fortalecimiento de formas de enseñanza innovadoras, a través
                de la investigación y el intercambio de experiencias y
                reflexiones, que se apliquen en el diseño de la educación
                superior del futuro.
              </Text>
            </div>

            <div>
              <Text color="black" size="lg" className="mb-2 md:mb-4">
                Esta edición está marcada por temas claves pos-pandemia:
              </Text>
              <ul className="text-base md:text-lg ml-10 mb-4 md:mb-6">
                <li className="list-disc">
                  Política, gestión y entorno universitario
                </li>
                <li className="list-disc">Tecnología e Innovación educativa</li>
                <li className="list-disc">
                  Transformación educativa: diversidad y competencias docentes
                  clave
                </li>
              </ul>
            </div>

            <Button variant="outline" color="secondary" className="w-full">
              <a href="/guia-eduCamp.pdf" download="Guia-eduCam">
                Descargar Guía EduCamp 2023
              </a>
            </Button>
          </div>
          {/* formulario */}
          <div className="w-full min-w-[416px] md:w-[600px] border-[3px] border-primary rounded-xl relative">
            <Heading
              className="text-center px-4 inline-table absolute top-[-20px] left-0 right-0 mx-auto bg-white"
              size="5xl"
              color="primary"
              variant="bold"
            >
              ¡Inscríbete aquí!
            </Heading>

            <form
              className="px-6 md:px-10 pt-14 flex flex-col gap-3 md:gap-8"
              onSubmit={form.onSubmit(handleSubmit)}
            >
              <Input label="Nombre" {...form.inputProps('nombres')} />
              <Select
                label="Institución"
                withFilter
                value={values.institucion}
                error={form.errors.institucion}
                onChange={({ value }) => form.setField('institucion', value)}
                options={ubigeo.institucion}
                dataExtractor={{ label: 'name', value: 'name' }}
              />
              <Input label="Cargo / Puesto" {...form.inputProps('cargo')} />
              <Select
                label="País"
                withFilter
                value={values.pais}
                error={form.errors.pais}
                onChange={({ value }) => form.setField('pais', value)}
                options={ubigeo.country}
                dataExtractor={{ label: 'name', value: 'name' }}
              />

              <Select
                label="Asistencia"
                withFilter
                value={values.asistencia}
                error={form.errors.asistencia}
                onChange={({ value }) => form.setField('asistencia', value)}
                options={ubigeo.institucion}
                dataExtractor={{ label: 'name', value: 'name' }}
              />
              <Input
                label="Correo Electrónico"
                {...form.inputProps('correo')}
              />

              <Button type="submit" className="mx-auto my-8">
                Enviar mis datos
              </Button>
            </form>
          </div>
        </div>
      </Container>
    </>
  )
}

export default About
