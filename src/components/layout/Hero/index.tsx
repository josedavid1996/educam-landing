import React from 'react'

import Image from 'next/image'

import Countdown from '@src/components/shared/Countdown'
import Heading from '@src/components/shared/Heading'
import Icon from '@src/components/shared/Icon'
import Text from '@src/components/shared/Text'

const Hero = () => {
  return (
    <>
      <div className="gradients min-h-[calc(100vh-95px)]  w-full  ">
        <div className="container flex flex-col md:flex-row justify-center md:justify-between items-center min-h-[calc(100vh-95px)] px-4 lg:px-0">
          <div className="w-full flex items-center flex-col" data-aos="fade-up">
            <Heading
              size="2xl"
              color="white"
              variant="normal"
              className="pb-4 w-[95%]  max-w-[500px] m text-center relative after:absolute  after:content-[''] after:w-[28%]  after:md:w-[32%] after:h-[2px] after:bg-white after:left-1 after:bottom-[33px]  before:absolute  before:content-[''] before:w-[27%] before:md:w-[31%] before:h-[2px] before:bg-white before:right-[10px] before:bottom-[33px]"
            >
              CONGRESO
            </Heading>
            <div className="relative w-[95%]  max-w-[500px] h-[120px] mx-auto">
              <Image
                src="/text-hero.png"
                className="w-full h-full"
                alt="text-hero"
                objectFit="contain"
                layout="fill"
              />
            </div>
            <div className="pt-8">
              <Countdown />
            </div>

            <div className="flex justify-center items-center gap-4">
              <Icon name="calendar" className="text-white text-xl" />
              <Text size="lg" variant="bold" color="white">
                14 y 15 de septiembre
              </Text>
            </div>
          </div>
          <div className="w-full">
            <Image
              src="/img-hero.png"
              alt="img-hero"
              width={200}
              height={200}
              layout="responsive"
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero
