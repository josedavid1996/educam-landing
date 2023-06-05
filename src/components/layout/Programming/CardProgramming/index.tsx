import React, { ReactNode } from 'react'

import TextGroupProgramming, { PropsText } from '../TextGroupProgramming'

interface Props {
  title: ReactNode
  date: string
  dataText: PropsText[]
}

const CardProgramming = ({ title, date, dataText }: Props) => {
  return (
    <>
      <div className=" p-4 lg:p-0" data-aos="fade-up">
        {/* INFO PROGRAMMING */}
        <div>
          <div className="w-full  flex md:justify-between items-end mb-4 md:mb-6">
            {title}
            <div className="ml-10 hidden md:block min-w-4 w-full min-w-auto mr-4  flex-1 h-[2px] bg-white translate-y-[-8px]"></div>

            <h3
              color="white"
              className=" text-[18px] sm:text-[20px] md:text-[24px] text-white pr-4  w-full md:w-auto  text-right font-bold"
            >
              {date}
            </h3>
          </div>
          <div className="flex flex-col gap-4">
            {dataText.map((item) => (
              <TextGroupProgramming {...item} key={item.id} />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
export default CardProgramming
