import { useGetAllCountInscriptions } from '@src/service/useGetAllInscriptions'
import CardInfo from './CardInfo'

const BannerInfo = () => {
  const { nroItems } = useGetAllCountInscriptions()
  console.log(nroItems)
  return (
    <>
      <div className="bg-banner-info py-16 relative flex items-center">
        <div className="w-full h-full bg-[#000000b0] absolute z-10"></div>
        <div className="container grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5  py-8 z-20 relative w-full">
          <CardInfo
            icon="charlasPrincipales"
            titleNumber={10}
            subtitle={
              <p className="text-lg  sm:text-2xl font-bold text-center  text-white mt-2">
                Edutalks
              </p>
            }
          />
          <CardInfo
            icon="mesasExperiencia"
            titleNumber={5}
            subtitle={
              <p className="text-lg  sm:text-2xl font-bold text-center  text-white mt-2">
                Mesas
                <span className="font-light block">de experiencia</span>
              </p>
            }
          />
          <CardInfo
            icon="mesasDebate"
            titleNumber={1}
            subtitle={
              <p className="text-lg  sm:text-2xl font-bold text-center  text-white mt-2">
                Mesa
                <span className="font-light block">de debate</span>
              </p>
            }
          />
          <CardInfo
            icon="presentacionesResultados"
            titleNumber={5}
            // subtitle="Talleres"
            subtitle={
              <p className="text-lg  sm:text-2xl font-bold text-center  text-white mt-2">
                Talleres
              </p>
            }
          />
          <CardInfo
            icon="inscritos"
            titleNumber={nroItems}
            subtitle={
              <p className="text-lg  sm:text-2xl font-bold text-center  text-white mt-2">
                inscritos
              </p>
            }
          />
        </div>
      </div>
    </>
  )
}

export default BannerInfo
