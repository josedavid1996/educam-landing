import React from 'react'

import Image from 'next/image'

import TitleSection from '@src/components/shared/TitleSection'
import Container from '@src/components/shared/Container'

const Organize = () => {
  return (
    <>
      <Container bgColor="bg-white" id="organizadores">
        <div className="container">
          {/* TITLE */}

          <TitleSection title="Organiza" bgColor="bg-black" color="black" />
          <div className="relative w-[80%] h-[10vw] mx-auto" data-aos="fade-up">
            <Image
              src="/organiza.png"
              alt="organiza"
              className="absolute w-full h-full"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
      </Container>
    </>
  )
}

export default Organize
