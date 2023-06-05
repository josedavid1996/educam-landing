import React from 'react'

import Heading, { Color } from '../Heading'

interface Props {
  title: string
  subTitle?: string
  color: Color
  bgColor: string
}

const TitleSection = ({ title, color, bgColor, subTitle }: Props) => {
  return (
    <>
      <div className="flex flex-row  mb-18" data-aos="fade-up">
        <div className="flex flex-row gap-4 items-end w-full  lg:px-0">
          <Heading
            color={color}
            size="extra-big"
            variant="bold"
            className=" leading-[0.8] "
          >
            {title}
          </Heading>
          <Heading
            color={color}
            size="extra-big"
            variant="light"
            className=" leading-[0.8] "
          >
            {subTitle}
          </Heading>
          <div className={`flex-1 h-[2px] ${bgColor} w-full`}></div>
        </div>
      </div>
    </>
  )
}

export default TitleSection
