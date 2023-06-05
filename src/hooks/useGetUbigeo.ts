import { countries } from '@src/assets/data/countries'

const instituciones = [
  { name: 'Colegio', value: 'Colegio' },
  { name: 'Universidad', value: 'Universidad' },
  { name: 'Instituto', value: 'Instituto' },
  { name: 'Otro', value: 'Otro' }
]

const useGetUbigeo = () => {
  const country = countries
  const institucion: any = instituciones

  return {
    country,
    institucion
  }
}

export default useGetUbigeo
