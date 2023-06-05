import React, { ReactNode } from 'react'

interface Props {
  bgColor: string
  id?: string
  children: ReactNode
  pt?: string
}

const Container = ({ bgColor, id, children, pt }: Props) => {
  return (
    <>
      <div className={`${bgColor} py-16 md:py-24 px-4 lgx:px-0 ${pt}`} id={id}>
        {children}
      </div>
    </>
  )
}

export default Container
