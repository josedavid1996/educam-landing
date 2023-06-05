import React from 'react'

import Container from '@src/components/shared/Container'
import TitleSection from '@src/components/shared/TitleSection'

const AlliedInstitutions = () => {
  return (
    <>
      <Container bgColor="bg-white" id="institucion-aliadas">
        <div className="container">
          <TitleSection
            title="Instituciones"
            subTitle=" aliadas"
            bgColor="bg-black"
            color="black"
          />

          <div
            className="mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 "
            data-aos="fade-up"
          >
            <div className="h-[200px] border-b border-r border-gray-300"></div>
            <div className="h-[200px] border-b border-r border-gray-300"></div>
            <div className="h-[200px] border-b border-r border-gray-300"></div>
            <div className="h-[200px] border-b border-r border-gray-300"></div>
            <div className="h-[200px] border-b border-r border-gray-300"></div>
            <div className="h-[200px] border-b border-r border-gray-300"></div>
            <div className="h-[200px] border-b border-r border-gray-300"></div>
            <div className="h-[200px] border-b border-r border-gray-300"></div>
            <div className="h-[200px] border-b border-r border-gray-300"></div>
          </div>
        </div>
      </Container>
    </>
  )
}

export default AlliedInstitutions
