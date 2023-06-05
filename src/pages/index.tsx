import { DataSeo } from '@src/assets/data/dataSeo'
import About from '@src/components/layout/About'
import AlliedInstitutions from '@src/components/layout/AlliedInstitutions'
import BannerInfo from '@src/components/layout/BannerInfo'
import Footer from '@src/components/layout/Footer'
import Guests from '@src/components/layout/Guests'
import Hero from '@src/components/layout/Hero'
import Organize from '@src/components/layout/Organize'
import Programming from '@src/components/layout/Programming'
import { Seo } from '@src/components/shared/seo'

const Home = () => {
  return (
    <>
      <Seo {...DataSeo} />
      <Hero />
      <About />
      <BannerInfo />
      <Programming />
      <Guests />
      <Organize />
      <AlliedInstitutions />
      <Footer />
    </>
  )
}

export default Home
