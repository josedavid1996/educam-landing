import React from 'react'

import { dataGuests } from '@src/assets/data/dataGuests'

import CardGuest from './CardGuest'

import TitleSection from '@src/components/shared/TitleSection'
import Container from '@src/components/shared/Container'

const Guests = () => {
  return (
    <>
      <Container bgColor="bg-tertiary" id="expositores">
        <div className="container">
          {/* TITLE */}
          <TitleSection
            title="Ponentes"
            bgColor="bg-white"
            subTitle=" invitados"
            color="white"
          />
          <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-8  md:gap-y-16">
            {dataGuests.map((item) => (
              <CardGuest
                key={item.id}
                nombre={item.name}
                pais={item.pais}
                id={item.id}
              />
            ))}
          </div>
        </div>
      </Container>
    </>
  )
}

export default Guests
