import React from 'react'

import Text from '@src/components/shared/Text'
import Icon from '@src/components/shared/Icon'

export interface PropsText {
  id: number
  number: string
  title: string
  subTitle: string
  initialHours: string
  endHours: string
}

const TextGroupProgramming = ({
  number,
  title,
  subTitle,
  initialHours,
  endHours
}: PropsText) => {
  return (
    <>
      <div
        className="flex justify-between items-end md:items-start "
        data-aos="fade-up"
      >
        <div className="flex flex-col items-start md:flex-row md:items-center gap-3 pl-6">
          <div className="w-12 h-12 border border-white rounded-full flex justify-center items-center">
            <p className="text-white">
              {number === 'star' ? <Icon name="star" /> : number}
            </p>
          </div>
          <div>
            <Text size="lg" color="white" variant="bold">
              {title}
            </Text>
            <Text size="lg" color="white">
              {subTitle}
            </Text>
          </div>
        </div>

        <div>
          <div className="flex flex-col md:flex-row justify-end items-center  md:gap-6 w-[100px] md:w-[231px]">
            <Text size="lg" color="white" className="">
              {initialHours}
            </Text>
            {/* <Icon name="minus" className="text-white" /> */}
            <span className="text-white ">-</span>
            <Text size="lg" color="white">
              {endHours}
            </Text>
          </div>
        </div>
      </div>
    </>
  )
}

export default TextGroupProgramming
