import React, { ReactNode, useMemo } from 'react'

import { useInView } from 'react-intersection-observer'

import Icon, { IconName } from '@src/components/shared/Icon'
import Text from '@src/components/shared/Text'
import AnimedCount from '@src/components/shared/AnimedCount'

interface Props {
  icon: IconName
  titleNumber: number | null | undefined
  subtitle: ReactNode
  text?: string
}

const CardInfo = ({ icon, titleNumber, subtitle, text }: Props) => {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0
  })
  return (
    <div className="inline-flex flex-col items-center pb-8 lg:pb-0">
      {/* Icon */}
      <div className="w-16 h-16 sm:w-20 sm:h-20  md:w-22 md:h-22 bg-white rounded-full flex justify-center items-center mb-6 md:mb-8">
        <Icon name={icon} className="w-[100%] h-[100%] "></Icon>
      </div>

      <div
        className="text-4xl sm:text-7xl font-bold  text-white flex"
        ref={ref}
      >
        {titleNumber! <= 9 && titleNumber! !== 0 && '0'}
        {useMemo(() => {
          return inView && <AnimedCount n={titleNumber} />
        }, [inView, titleNumber])}
      </div>
      {/* <p className="text-lg  sm:text-2xl font-normal text-center  text-white mt-2">
        {subtitle}
      </p> */}
      {subtitle}
      <Text size="sm" color="white" variant="light">
        {text}
      </Text>
    </div>
  )
}

export default CardInfo
