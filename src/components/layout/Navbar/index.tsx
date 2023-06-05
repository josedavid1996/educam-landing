import React, { useState } from 'react'

import NextLink from 'next/link'
import { useRouter } from 'next/router'
import Image from 'next/image'

import Icon from '@src/components/shared/Icon'

const Navbar = () => {
  const [isActive, setisActive] = useState(false)

  const { push } = useRouter()

  const setLink = (id: string) => {
    setisActive(false)
    push(id)
  }
  return (
    <>
      <header className="shadow-lg w-full sticky top-0 z-40 h-16  md:h-[96px] flex items-center gradients">
        <nav className="flex justify-between  items-center relative w-full px-5 mdx:px-8">
          {/* LOGO */}
          <NextLink href="/" passHref>
            <div className="relative w-[220px] h-[120px]">
              <Image
                layout="fill"
                alt="logo"
                src="/logo.png"
                objectFit="contain"
                className="cursor-pointer absolute w-full h-full"
              />
            </div>
          </NextLink>

          {/* ITEMS MENU */}
          <div
            className={`${
              isActive ? 'flex' : 'hidden mdx:flex'
            } absolute mdx:static w-[300px] mdx:w-auto top-[91px]  md:top-[108px] flex-col mdx:flex-row   z-40 left-0  mdx:items-center bg-primary mdx:bg-transparent mdx:flex`}
          >
            <li
              className="hover:bg-primary-700 mdx:hover:bg-transparent text-white  list-none  py-4 mdx:py-0  cursor-pointer "
              onClick={() => setLink('#inscribete')}
            >
              <a className=" font-normal  text-base transition-all duration-300 border-0 mdx:border-r-2 border-white px-6">
                INSCRÍBETE
              </a>
            </li>
            <li
              className="hover:bg-primary-700 mdx:hover:bg-transparent text-white  list-none  py-4 mdx:py-0  cursor-pointer"
              onClick={() => setLink('#programa')}
            >
              <a className=" font-normal  text-base  transition-all duration-300 border-0 mdx:border-r-2 border-white px-6">
                PROGRAMA
              </a>
            </li>
            <li
              className="hover:bg-primary-700 mdx:hover:bg-transparent text-white  list-none  py-4 mdx:py-0  cursor-pointer"
              onClick={() => setLink('#expositores')}
            >
              <a className=" font-normal  text-base  transition-all duration-300 border-0 mdx:border-r-2 border-white px-6">
                EXPOSITORES
              </a>
            </li>
            <li
              className="hover:bg-primary-700 mdx:hover:bg-transparent  text-white  list-none  py-4 mdx:py-0  cursor-pointer"
              onClick={() => setLink('#organizadores')}
            >
              <a className=" font-normal  text-base transition-all duration-300 border-0 mdx:border-r-2 border-white px-6">
                ORGANIZADORES
              </a>
            </li>
            <li
              className="hover:bg-primary-700 mdx:hover:bg-transparent  text-white  list-none   py-4 mdx:py-0 cursor-pointer"
              onClick={() => setLink('#institucion-aliadas')}
            >
              <a className="font-normal  text-base  transition-all duration-300   pl-6 mdx:pl-8 pr-2">
                INSTITUCIONES ALIADAS
              </a>
            </li>
          </div>

          {/* ICON MENU */}
          <div
            className="block mdx:hidden sm:pr-5"
            onClick={() => setisActive(!isActive)}
          >
            <Icon name="menu" className=" text-white text-4xl cursor-pointer" />
          </div>
        </nav>
      </header>
    </>
  )
}

export default Navbar
